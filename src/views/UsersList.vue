<template>
  <v-container class="mt-5">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-list class="mx-auto" elevation="10" max-width="600"  two-line>
          <UserItem :key="index" :user="user" v-for="(user, index) in users" />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserItem from "@/components/UserItem";
import { mapState } from "vuex";

export default {
  name: "UsersList",
  components: { UserItem },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style scoped></style>
