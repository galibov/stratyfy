<template>
  <v-card max-width="600px" class="elevation-8">
    <v-toolbar color="info" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          label="Username"
          name="username"
          v-model="username"
          required
          :rules="userNameRules"
          prepend-icon="mdi-account"
          type="text"
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          name="password"
          :rules="passwordRules"
          v-model="password"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          required
          :type="showPassword ? 'text' : 'password'"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn ref="loginBtn" large @click="authUser" color="info">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: undefined,
      password: undefined,
      showPassword: false,
      userNameRules: [(v) => !!v || "Username is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },

  methods: {
    ...mapActions(["loginUser"]),
    async authUser() {
      if (this.$refs.form.validate()) {
        await this.loginUser({
          username: this.username,
          password: this.password,
        });

        await this.$router.push({
          name: "Home",
          params: {
            username: this.username,
          },
        });
      }
    },
  },
};
</script>

<style scoped></style>
