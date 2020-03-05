<template>
    <q-page padding>
        <div class="row justify-center q-mb-md">
        <q-img src="~assets/reading_list.svg" style="max-width: 450px;"
            contain/>
        </div>
        <div class="row justify-center q-mb-md">
    <q-card class="card">
      <q-card-section class="text-h6">
        {{ fact.name }}
      </q-card-section>
      <q-card-section>
        <q-img class="rounded-borders" 
            :src="fact.imageUrl ? fact.imageUrl : 'statics/image-placeholder.png'"
            basic contain/>
      </q-card-section>
      <q-card-section>
		<p v-if="fact.category">{{ fact.category }}</p>
    	<p v-else>No category provided.</p>
	</q-card-section>
      <q-card-section>
        <p v-if="fact.description">{{ fact.description }}</p>
    	<p v-else>No description provided.</p>
      </q-card-section>
    <q-card-section>
        <p v-if="fact.fullText">{{ fact.fullText }}</p>
    	<p v-else>Full text coming soon</p>
    </q-card-section>
    </q-card>
    </div>
    </q-page>
</template>
<script>
 import {mapGetters} from 'vuex'
export default {
    name: 'fact-page',
    props: ['fact'],
    computed: {
	  	...mapGetters('facts', ['fact'])
    }
    
}
</script>
<style scoped>
  .card {
        /* margin-left: 50px; */
		min-height: 400px;
		max-width: 400px;
		width: 400px;
		transition: background 0.3s;
	}
</style>