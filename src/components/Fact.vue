<template>
    <q-card class="card">
    <q-img
      :src="fact.imageUrl ? fact.imageUrl : 'statics/image-placeholder.png'"
      basic
      contain
    >
      <div class="absolute-bottom text-h6">
        {{ fact.name }}
      </div>
    </q-img>

		<q-card-section>
      <!-- <q-rating
        :value="fact.rating"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      /> -->
    </q-card-section>

    <q-card-section>
      <span class="p" v-if="fact.description">{{ fact.description }}</span>
      <p v-else>No description provided.</p>
    </q-card-section>
	<br>
    <q-card-actions
    	class="absolute-bottom"
    	align="right">
      <q-btn
      	@click="showEditFactModal = true"
      	icon="edit"
      	color="blue"
      	flat>Edit</q-btn>
      <q-btn
      	@click="promptToDelete()"
      	icon="delete"
      	color="red"
      	flat>Delete</q-btn>
    </q-card-actions>

    <q-dialog 
    	v-model="showEditFactModal">
      <modal-add-edit-fact 
      	type="edit"
      	:fact="fact"
      	@close="showEditFactModal = false" />
    </q-dialog>

  </q-card>
</template>
<script>
export default {
    props: ['fact', 'id'],
}
</script>
<style>
    .p{
     font-size: 16px;
	 text-indent: 8px;
    }
	.card {
        /* margin-left: 50px; */
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
</style>