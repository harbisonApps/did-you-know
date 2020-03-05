<template>
    <q-page id="edit-fact" padding>
        <div class="row justify-center q-mb-md">
        <q-card class="form-card">
            <q-card-section>
                <div class="text-h6 heading">Fact {{factToSubmit.name}}</div>
            </q-card-section>
            <form @submit.prevent="submitForm">
            <q-card-section>
                <div class="row q-mb-md">
                    <q-input 
                        :rules="[
                        val => !!val || '* Required',
                        val => val.length < 21 || 'Please use maximum 20 characters',
                        ]"
                        filled
                        v-model="factToSubmit.name"
                        label="Name"
                        class="col"
                        ref="name" />
                </div>
                <span :slug.sync="factToSubmit.slug"></span>
                <div class="row q-mb-md">
                    <q-input
                        :rules="[
                        val => !!val || '* Required',
                        val => val.length < 21 || 'Please use maximum 20 characters',
                        ]"
                        filled
                        :category.sync="factToSubmit.category"
                        label="Category"
                        class="col"
                        ref="category" />
                </div>
                <div class="row q-mb-md">
                    <q-input
                        :rules="[
                        val => !!val || '* Required',
                        val => val.length < 135 || 'Please use maximum 135 characters',
                    ]"
                    filled
                    :description.sync="factToSubmit.description"
                    label="Description"
                    type="textarea"
                    class="col"
                    ref="description" />
                </div>
                <div class="row q-mb-md">
                    <q-input
                        :rules="[
                        val => !!val || '* Required',
                    ]"
                    filled
                    :fullText.sync="factToSubmit.fullText"
                    label="Full text"
                    type="textarea"
                    class="col"
                    ref="fullText" />
                </div>
                <div class="row q-mb-md">
                    <q-input
                        filled
                        :imageUrl.sync="factToSubmit.imageUrl"
                        label="Image URL"
                        class="col" />
                    <q-img
                    :src="factToSubmit.imageUrl ? factToSubmit.imageUrl : 'statics/image-placeholder.png'"
                    class="q-ml-sm"
                    contain />
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn :to="{name:'admin-page'}" name="cancel"
                    label="Cancel"
                    color="grey"
                    />
                <q-btn
                    @click.prevent="submitFact"
                    label="Save"
                    color="primary"/>
            </q-card-actions>
            </form>
        </q-card>
        </div>
    </q-page>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { firebaseDb} from '../../boot/firebase'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-fact'
export default {
    name: 'edit-fact',
    mixins: [mixinAddEditTask],
    // watch: {
    // $route: "fetchData"
    // },
    props: [ 'type', 'fact'],
    computed: {
	  	...mapActions('facts', ['updateFact'])
    },
    data() {
        return {
             factToSubmit: {
                name: '',
                slug: '',
                category: '',
                description:  '',
                fullText: '',
                imageUrl: ''
             }
         }
    },
    methods: {
        ...mapActions('facts', ['updateFact']),
        submitForm() {
            this.submitFact()
        },
      submitFact() {
        this.updateFact({
          id: this.id,
          updates: this.factToSumbit
        })
        this.$emit('close')
      }
    },
    mounted() {
        if (this.type == 'edit') {
            this.factToSumbit = Object.assign({}, this.fact)
        }
    }
      
}
</script>
<style>
	.form-card {
		max-width: 400px;
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
</style>