//import Vue from 'vue'
// import { uid, Notify } from 'quasar'
// import { firebaseDb, firebaseAuth } from '../boot/firebase'
// import { showErrorMessage } from '../functions/error-message'

const state = {
    facts: {
    	'id1': {
    		name: 'Burger',
    		description: ' A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
    		imageUrl: 'https://i.imgur.com/0umadnY.jpg',
    	},
    	'id2': {
    		name: 'Pizza',
    		description: ' Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
    		imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
    	},
    	'id3': {
    		name: 'Sprouts',
    		description: ' The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
    		imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
    	}	
    },
    factsDownloaded: false
}


const getters = {
    facts: (state) => {
        return state.facts
    }
}
export default {
    namespaced: true,
    state,
    // mutations,
    // actions,
    getters
}