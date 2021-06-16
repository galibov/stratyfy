import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "../api/axiosInstance";
import lsKeys from "@/lib/localstorageKeys";
import roles from "@/lib/roles";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    isManager: false,
    profileData: undefined,
    users: undefined,
  },
  mutations: {
    SET_IS_LOGIN(state, param) {
      state.isLogin = param;
    },

    SET_IS_MANAGER(state, param) {
      state.isManager = param;
    },

    SET_PROFILE_DATA(state, param) {
      state.profileData = param;
    },

    SET_USERS(state, param) {
      state.users = param;
    },
  },
  actions: {
    async loginUser({ commit }, { username, password }) {
      const { data } = await axiosInstance.post("/login", {
        password,
        username,
      });
      //localstorage is not secure, jwt should store in httpOnly cookie
      localStorage.setItem(lsKeys.AUTH_TOKEN, data.token);
      commit("SET_IS_LOGIN", true);
    },

    async getProfileData({ commit }, username) {
      const { data } = await axiosInstance.get("/users/" + username);
      commit("SET_PROFILE_DATA", data);
      commit("SET_IS_LOGIN", true);
      if (roles.manager === data.role) {
        commit("SET_IS_MANAGER", true);
      }
    },

    async getUsers({ commit }) {
      const { data } = await axiosInstance.get("/users");
      commit("SET_USERS", data.users);
      //it's looks like patch, but this is api limitation
      commit("SET_IS_LOGIN", true);
      commit("SET_IS_MANAGER", true);
    },

    async logOut({ commit }) {
      localStorage.removeItem(lsKeys.AUTH_TOKEN);
      commit("SET_IS_LOGIN", false);
      commit("SET_IS_MANAGER", false);
    },
  },
  modules: {},
});
