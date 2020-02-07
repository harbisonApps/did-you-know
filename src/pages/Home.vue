<template>
  <q-page padding>
    <h1 class="h1">Did You Know ???</h1>
    <div class="row q-gutter-lg justify-evenly">
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
  .h1{
    font-size: 2rem
  }
</style>
