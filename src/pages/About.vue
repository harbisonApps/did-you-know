<template>
  <q-page padding>
    <h5>About This App</h5>
    <q-list bordered padding>
		  <q-item-label header>More</q-item-label>

		  <q-item
		  	to="/help"
		  	tag="label"
		  	v-ripple>
		    <q-item-section>
		      <q-item-label>Help</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-icon name="chevron_right" /> 
		    </q-item-section>
		  </q-item>

		  <q-item
		  	@click="visitOurWebsite"
		  	tag="label"
		  	v-ripple>
		    <q-item-section>
		      <q-item-label>Visit our website</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-icon name="chevron_right" /> 
		    </q-item-section>
		  </q-item>

		  <q-item
		  	@click="emailUs"
		  	tag="label"
		  	v-ripple>
		    <q-item-section>
		      <q-item-label>Email us</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-icon name="chevron_right" /> 
		    </q-item-section>
		  </q-item>

		</q-list>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  methods: {
			visitOurWebsite() {
				openURL('http://www.harbisonapps.com')
			},
			emailUs() {
				window.location.href = 'mailto:harbisonapps@gmail.com?subject=Did You Know Feedback'
			}
		}
};
</script>

<style lang="scss" scoped></style>
