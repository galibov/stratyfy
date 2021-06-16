<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-col cols="10">
        <Profile />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from "../components/Profile";

export default {
  name: "Home",

  components: {
    Profile,
  },
};
</script>
