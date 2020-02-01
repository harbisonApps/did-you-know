<template>
  <q-page class="flex flex-center">
    <q-card class="auth-tabs">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <LoginRegister :tab="tab"/>
          </q-tab-panel>

          <q-tab-panel name="register">
            <LoginRegister :tab="tab"/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
  </q-page>
</template>

<script>

export default {
  name: "PageIndex",
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    LoginRegister: require("components/Auth/LoginRegister.vue").default
  }
};
</script>
