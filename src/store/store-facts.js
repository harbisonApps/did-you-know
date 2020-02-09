import Vue from 'vue'
import { uid, Notify } from 'quasar'
import { firebaseDb, firebaseAuth } from '../boot/firebase'
import { showErrorMessage } from '../functions/error-message'

const state = {
    facts: {
    	// 'id1': {
    	// 	name: 'Burger',
    	// 	description: ' A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
    	// 	imageUrl: 'https://i.imgur.com/0umadnY.jpg',
    	// },
    	// 'id2': {
    	// 	name: 'Pizza',
    	// 	description: ' Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
    	// 	imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
    	// },
    	// 'id3': {
    	// 	name: 'Sprouts',
    	// 	description: ' The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
    	// 	imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
    	// }	
	},
	search: '',
	sort: 'name',
    factsDownloaded: false
}

const mutations = {
	addFact(state, payload) {
		Vue.set(state.facts, payload.id, payload.fact)
	},
	updateFact(state, payload) {
		// -TODO: Remove consolelog
		//console.log('from mutaion payload:', payload);
		Object.assign(state.facts[payload.id], payload.updates);
	},
	deletefact(state, id) {
		// -TODO: Remove consolelog
		console.log('delete id:', id);
		Vue.delete(state.facts, id);
	},
	clearFacts(state) {
		state.facts = {}
	},
	setSearch(state, value) {
		state.search = value
	},
	setSort(state, value) {
		state.sort = value
	},
	setFactsDownloaded(state, value) {
		state.factsDownloaded = value;
	}
}

const actions = {
	addFact({ dispatch }, task) {
		let taskId = uid();
		let payload = {
			id: taskId,
			task
		};
		dispatch("fbAddTask", payload);
	},
	fbAddFact({ }, payload) {
		//console.log(payload)
		//let currentUser = firebaseAuth.currentUser.uid;
		let factRef = firebaseDb.ref('facts/' + payload.id);
		factRef.set(payload.fact, err => {
			if (err) {
				showErrorMessage(err.message)
			} else {
				Notify.create({
					color: "primary",
					message: "Fact created",
					position: "center",
					timeout: 500
				});
			}
		})
	},
	updateFact({ dispatch }, payload) {
    	dispatch("fbUpdateFact", payload);
  },
	fbUpdateFact({ }, payload) {
		//let currentUser = firebaseAuth.currentUser.uid;
		let factRef = firebaseDb.ref("facts/" + payload.id);
		factRef.update(payload.updates, err => {
			if (err) {
				showErrorMessage(err.message);
			} else {
				let keys = Object.keys(payload.updates)
				if (!(keys.includes('completed') && keys.length == 1)) {
					Notify.create({
						color: "green",
						message: "Task updated",
						position: "center",
						timeout: 200
					});
				}
			}
		});
	},
	deleteFact({ dispatch }, id) {
		dispatch("fbDeleteFact", id);
	},
	fbDeleteFact({ }, id) {
		// let currentUser = firebaseAuth.currentUser.uid;
		let factRef = firebaseDb.ref("facts/" + id);
		factRef.remove(err => {
			if (err) {
				showErrorMessage(err.message);
			} else {
				Notify.create({
					color: "negative",
					message: "Fact deleted",
					position: "center",
					timeout: 200
				})
			}
		});
	},
	fbReadData({ commit }) {
		//console.log("reading data from firebase");
		//let currentUser = firebaseAuth.currentUser.uid;
		let facts = firebaseDb.ref("facts/");
		// intial check for data
		facts.once('value', snapshot => {
			commit('setFactsDownloaded', true)
		}, err => {
			showErrorMessage(err.message)
			this.$router.replace('/auth')
		})
		// update on create method
		facts.on("child_added", snapshot => {
			// console.log('snapshot:', snapshot)
			let fact = snapshot.val();
			console.log("fact", fact);
			let payload = {
				id: snapshot.key,
				fact: fact
			}
			commit('addFact', payload)
		});
		//update on update method
		facts.on("child_changed", snapshot => {
			// console.log('snapshot:', snapshot)
			let task = snapshot.val();
			console.log("fact", fact);
			let payload = {
				id: snapshot.key,
				updates: fact
			};
			commit("updateFact", payload);
		});
		//update on delete method
		facts.on("child_removed", snapshot => {
			// console.log('snapshot:', snapshot)
			let factId = snapshot.key;
			commit("deleteFact", factId);
		});
	}
}

const getters = {
    facts: (state) => {
        return state.facts
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}