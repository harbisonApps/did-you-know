<template>
<div class="row justify-center q-mb-md">
    <div>
        
        <!-- <q-btn color="primary"
            v-bind:to="{name:'edit-fact'}"
            >Edit</q-btn> -->
        <q-item :key="fact.id">
            <q-item-section side top>
                <q-item-label>
                   <h5> {{fact.name}}</h5>
                </q-item-label>
            </q-item-section>
            <q-item-section>
                <q-item-label caption>
                    <q-btn label="edit" flat color="primary" :to="{name:'edit-fact', params:{slug: fact.slug}}"/>
                        <!-- edit
                    </q-btn> -->
                </q-item-label>
            </q-item-section>
                <q-space/>
            <q-item-section>
                <q-item-label>
                    <q-btn label="delete" flat
                        @click.stop="promptToDelete(id)"
                        color="negative"/>
                </q-item-label>
            </q-item-section>
        </q-item>
    </div>
</div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex"
export default {
    name: 'admin-facts',
    props: ["fact", "id"],
    computed: {
	  	...mapGetters('facts', ['facts'])
    },
}
</script>
<style scoped>

</style>