<template>
  <v-list-item
    :key="user.username"
  >
    <v-list-item-avatar>
      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{user.username}}</v-list-item-title>
      <v-list-item-subtitle>{{user.role}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {},
  },
};
</script>

<style scoped></style>
