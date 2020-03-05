<template>
	<q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading"> Add Fact</div>
    </q-card-section>

    <q-card-section>

    	<div class="row ">
	      <q-input dense
	      	:rules="[
	          val => !!val || '* Required',
	          val => val.length < 21 || 'Please use maximum 20 characters',
	        ]"
	      	filled
	      	v-model="factToSubmit.name"
	      	label="Name"
	      	class="col"
	      	ref="name"/>
    	</div>
		<div class="q-mb-sm">
			<span>{{factToSubmit.slug}}</span>
			<VueSuglify :slugify="factToSubmit.name" :slug.sync="factToSubmit.slug">
				<input hidden disabled class="col" slot-scope="{inputBidding}" v-bind="inputBidding"
					type="text" placeholder="Slug ...">
			</VueSuglify>
			
			</div>
		<div class="row ">
	      <q-input dense
	      	:rules="[
	          val => !!val || '* Required',
	          val => val.length < 21 || 'Please use maximum 20 characters',
	        ]"
	      	filled
	      	v-model="factToSubmit.category"
	      	label="Category"
	      	class="col"
	      	ref="category" />
    	</div>

    	<div class="row ">
    		<q-input dense
    			:rules="[
				val => !!val || '* Required',
    		    val => val.length < 135 || 'Please use maximum 135 characters',
    		  ]"
		      filled
		      v-model="factToSubmit.description"
		      label="Description"
		      type="textarea"
		      class="col"
		      ref="description" />
    	</div>
		<div class="row ">
    		<q-input dense
    			:rules="[
    		    val => !!val || '* Required',
    		  ]"
		      filled
		      v-model="factToSubmit.fullText"
		      label="Full text"
		      type="textarea"
		      class="col"
		      ref="fullText" />
    	</div>

    	<div class="row ">
	      <q-input dense
	      	filled
	      	v-model="factToSubmit.imageUrl"
	      	label="Image URL"
	      	class="col" />
	      <q-img
          :src="factToSubmit.imageUrl ? factToSubmit.imageUrl : 'statics/image-placeholder.png'"
          class="q-ml-sm"
          contain />
    	</div>

    	<!-- <div class="">
    		<div class="row">
					<p class="q-mb-none">Rating:</p>
    		</div>
				<div class="row">
	    		<q-rating
			      v-model="foodToSubmit.rating"
			      size="2em"
			      color="orange" />
				</div>
    	</div> -->
    	
    </q-card-section>

    <q-card-actions align="right">
      <q-btn name="cancel"
      	label="Cancel"
      	color="grey"
      	v-close-popup/>
      <q-btn
      	@click.prevent="submitForm"
      	label="Save"
      	color="primary" v-close-popup/>
    </q-card-actions>
  </q-card>
</template>

<script>
	import { mapActions } from 'vuex'
	import VueSuglify from "vue-suglify"
	// import slugify from 'slugify'
	export default {
		props: [ 'fact', 'slug', 'id'],
		components:{
			VueSuglify
		},
		data() {
			return {
				factToSubmit: {
					name: '',
					slug: '',
					category:'',
					description: '',
					fullText:'',
					imageUrl: ''
				}
			}
		},
		methods: {
			...mapActions('facts', ['createFact', 'updateFact']),
			submitForm() {
				this.$refs.name.validate()
				this.$refs.description.validate()
				
				if (!this.$refs.name.hasError && !this.$refs.description.hasError) {
					this.submitFact()
				}
			},
			submitFact() {
				this.createFact(this.factToSubmit)
				this.$router.replace('/admin')
			}
		},
		// mounted() {
		// 	if (this.type == 'edit') {
		// 		this.factToSubmit = Object.assign({},this.fact)
		// 	}
		// }
	}
</script>

<style>
	.form-card {
		min-width: 400px;
	}
	.form-card .heading {
		text-transform: capitalize;
	}
	.form-card .q-card-section {
		width: 100%;
	}
	.thumbnail {
		max-width: 50px;
		max-height: 50px;
	}
	.form-card .q-img {
		height: 56px;
		width: 56px;
		border-radius: 10px;
	}
	.form-card .q-img__image {
		background-size: cover !important;
	}
	.form-card .q-rating__icon {
		opacity: 0.2;
	}
	.form-card .q-rating__icon--active {
		opacity: 1;
	}
</style>