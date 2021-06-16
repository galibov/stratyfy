import Vuex from "vuex";
import Vuetify from "vuetify";
import AppBar from "@/components/layout/AppBar";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AppBar", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  test("If user is not logged in, do not show logout button", () => {
    const store = new Vuex.Store({
      state: {
        isLogin: false,
      },
    });
    const wrapper = shallowMount(AppBar, { localVue, vuetify, store });
    expect(wrapper.findComponent({ ref: "logout" }).exists()).toBeFalsy();
  });

  test("If user is  logged in, show logout button", async () => {
    const store = new Vuex.Store({
      state: {
        isLogin: true,
      },
    });
    const wrapper = shallowMount(AppBar, { localVue, store, vuetify });
    expect(wrapper.findComponent({ ref: "logout" }).exists()).toBeTruthy();
  });

  test("If user is not  manager, do not show list-users link", async () => {
    const store = new Vuex.Store({
      state: {
        isManager: false,
      },
    });
    const wrapper = shallowMount(AppBar, { localVue, store, vuetify });
    expect(wrapper.findComponent({ ref: "usersList" }).exists()).toBeFalsy();
  });

  test("If user is manager, show logout button", async () => {
    const store = new Vuex.Store({
      state: {
        isManager: true,
      },
    });
    const wrapper = shallowMount(AppBar, { localVue, store, vuetify });
    expect(wrapper.findComponent({ ref: "usersList" }).exists()).toBeTruthy();
  });
});
