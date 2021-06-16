<template>
  <v-card class="mx-auto" max-width="434" tile>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-col>
      <v-avatar size="100" style="position: absolute; top: 130px">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-avatar>
    </v-col>
    <v-list-item color="rgba(0, 0, 0, .4)">
      <v-list-item-content class="text-right">
        <v-list-item-title class="title">
          {{ profileData.username }}</v-list-item-title
        >
        <v-list-item-subtitle>{{ profileData.role }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Profile",

  data: () => ({}),

  computed: {
    ...mapState(["profileData"]),
  },
};
</script>
