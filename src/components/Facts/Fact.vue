<template>
	<q-card :key="fact.id" class="card">
    <q-img
      :src="fact.imageUrl ? fact.imageUrl : 'statics/image-placeholder.png'"
      basic
      contain
    >
      <div class="absolute-bottom text-h6">
        {{ fact.name }}
      </div>
    </q-img>

		<!-- <q-card-section>
      <q-rating
        :value="fact.rating"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      />
    </q-card-section> -->
	<q-card-section>
		<p v-if="fact.category">{{ fact.category }}</p>
    	<p v-else>No category provided.</p>
    	<span class="p" v-if="fact.description">{{ fact.description }}</span>
    	<p v-else>No description provided.</p>
	</q-card-section>
    <!-- <q-card-actions
    	class="absolute-bottom"
    	align="right">
	  <q-btn color="secondary" class="float-right text-black" :to="{
              name: 'fact-page',
              params: { id: fact.id },
            }"
	  
	  >more</q-btn>
	  <br>
      <q-btn
      	@click.stop="showEditFactModal = true"
      	icon="edit"
      	color="primary"
      	flat>edit</q-btn>
      <q-btn
      	@click.stop="promptToDelete(id)"
      	icon="delete"
      	color="negative"
      	flat>delete</q-btn>
    </q-card-actions> -->


  </q-card>
	
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex"
export default {
	props: ["fact", "id"],
	data(){
		return{
			
		}
	},
	methods:{
		...mapActions("facts", ["updateFact", "deleteFact"]),

		promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this fact?",
          position: "bottom",
          ok: {
            push: true,
            color: "green"
          },
          cancel: {
            push: true,
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          console.log("confirm delete");
          this.deleteFact(id);
        });
	},
	showEditFactModal() {
      this.showEditFact = true
    }
	}
}
</script>
<style>
    .p{
     font-size: 16px;
	 text-indent: 8px;
    }
	.card {
        
		min-height: 400px;
		max-width: 295px;
		width: 295px;
		transition: background 0.3s;
	}
	.card-clickable {
		cursor: pointer;
	}
	.card-clickable:hover {
		background: #bdbdbd!important;
	}
	.card .q-img {
		max-height: 180px;
	}
	.card .q-img__image {
		background-size: cover !important;
	}
	.card .q-rating__icon {
		opacity: 0.2;
	}
	.card .q-rating__icon--active {
		opacity: 1;
	}
	.q-btn{
		border: none
	}
</style>