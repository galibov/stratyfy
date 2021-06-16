<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col align="center" cols="12" sm="8" md="4">
        <Login />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: "Auth",
  components: { Login },
};
</script>

<style scoped></style>
