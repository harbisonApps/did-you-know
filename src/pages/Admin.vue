<template>
    <q-page class="q-px-md">
        <h2>Admin</h2>
        <AdminFacts v-for="fact in facts"
            :key="fact.id"
            :fact="fact"/>
        <div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <AddButton @click="showAddFactModal = true"/>
      </q-page-sticky>
      <q-dialog v-model="showAddFactModal">
        <AddEditFactModal @click="showAddFactModal =true" type="add"/>
      </q-dialog>
    </div>
    </q-page>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'admin-page',
    components:{
        'AdminFacts': require('components/Admin/AdminFacts.vue').default,
        'AddButton': require('components/Facts/AddButton.vue').default,
        'AddEditFactModal': require('components/Facts/AddEditFactModal.vue').default
    },
    data() {
	  	return {
	  		showAddFactModal: false
	  	}
	},
    computed: {
	  	...mapGetters('facts', ['facts'])
    },
}
</script>
<style scoped>

</style>
