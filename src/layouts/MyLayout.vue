<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title class="absolute-center">
          Did You Know
        </q-toolbar-title>
        <q-btn v-if="!loggedIn" flat to="/auth" class="absolute-right" icon-right="account_circle" label="login" />
        <q-btn @click="logoutUser" v-else flat class="absolute-right" label="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="190"
      :breakpoint="1025"
      bordered
      
      content-class="bg-secondary text-black"
    >
      <q-list>
        <q-item-label header class="text-black"> Version <span class="text-weight-bold">{{ appVersion }}</span></q-item-label>
          <q-item
          v-for="nav in navs"
          :key="nav.label"
          exact
          class="text-black"
          clickable
          :to="nav.to"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item exact class="text-black" clickable to="accessibility">
          <q-item-section avatar>
            <q-icon name="accessibility_new"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Accessibility</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          exact
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      appVersion: "0.1.0",
      navs: [
        { to: "/", icon: "home", label: "Home" },
        { to: "/random", icon: "autorenew", label: "Random Fact" },
        { to: "/about", icon: "info", label: "About" }
      ]
    };
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods:{
    ...mapActions('auth', ['logoutUser'])
  }
};
</script>
