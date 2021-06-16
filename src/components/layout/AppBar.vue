<template>
  <v-app-bar app color="info" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn text link :to="{ name: 'Users' }" v-if="isManager">
      <span class="mr-2">List of Users</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>

    <v-btn @click="logOut" text v-if="isLogin">
      <span class="mr-2">Log out</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AppBar",

  computed: {
    ...mapState(["isLogin", "isManager"]),
  },

  methods: {
    ...mapActions(["logOut"]),
  },
};
</script>

<style scoped></style>
