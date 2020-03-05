<template>
  <q-page padding>
    <div class="row justify-center q-mb-md">
      <q-img src="~assets/reading_list.svg" style="max-width: 450px;"
        contain/>
    </div>
    <div class="row justify-center q-mb-md">
    <q-card class="card">
      <q-card-section class="text-h6">
        Random Fact #3649
      </q-card-section>
      <q-card-section>
        <q-img class="rounded-borders" src="statics/image-placeholder.png"
          basic contain/>
      </q-card-section>
      <q-card-section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel odio perspiciatis, 
          reprehenderit sit, ipsa voluptatem voluptas repudiandae dolorum doloribus sapiente odit 
          provident nobis illum commodi soluta ab at sequi?
        </p>
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {};
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