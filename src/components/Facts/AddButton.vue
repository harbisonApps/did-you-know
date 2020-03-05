<template>
	<!-- <q-card
		@click="$emit('click')"
  	class="card-add card-clickable bg-grey-4">
		 <q-icon
		 	name="add"
		 	size="104px"
		 	color="white"
		 	class="absolute-center"
		/>
  </q-card> -->
  <q-btn ripple fab round class="btnColor all-pointer-events" 
  	@click="$emit('click')" size="xl" color="positive" icon="add"/>
</template>

<style scoped>
.btnColor{
	background-color: #374c72;
	color: white
}
</style>