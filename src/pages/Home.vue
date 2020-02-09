<template>
  <q-page padding>
    <div class="row justify-center q-mb-md">
      <q-img 
        src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1492025578APIB-01.png"
        :ratio="16/9"
        style="max-width: 650px;"
        contain
      >
        <h2 class="absolute-middle text-white text-center">Did You Know ???</h2>
      </q-img>
    </div>
    <div class="row q-gutter-lg justify-center">
    <Fact
      v-for="fact in facts"
				:key="fact.id"
				:fact="fact">
    </Fact>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
	  	...mapGetters('facts', ['facts'])
    },
    components:{
      'Fact': require('components/Fact.vue').default
    }
};
</script>

<style scoped>
  
</style>
