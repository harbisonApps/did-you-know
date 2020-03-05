<template>
  <q-page padding>
    <div class="row justify-center q-mb-md">
      <q-img 
        src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1492025578APIB-01.png"
        :ratio="16/9"
        style="max-width: 650px;"
        contain
      >
        <h1 class="absolute-middle text-white text-center">Did You Know ???</h1>
      </q-img>
    </div>
    <div class="row q-gutter-lg justify-evenly">
      
      <Fact 
        v-for="fact in facts"
          :key="fact.id"
          :fact="fact"/>
      <!-- <q-dialog v-model="showAddFactModal">
        <AddEditFactModal @click="showAddFactModal =true" type="add"/>
      </q-dialog> -->
    </div>
    <div>
      <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <AddButton @click="showAddFactModal = true"/>
      </q-page-sticky> -->
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
	  	return {
	  		//showAddFactModal: false
	  	}
	  },
  computed: {
	  	...mapGetters('facts', ['facts'])
    },
    components:{
      'Fact': require('components/Facts/Fact.vue').default,
      // 'AddButton': require('components/Facts/AddButton.vue').default,
      // 'AddEditFactModal': require('components/Facts/AddEditFactModal.vue').default
    }
};
</script>

<style scoped>
  
</style>
