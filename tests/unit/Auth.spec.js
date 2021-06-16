import Vuex from "vuex";
import Vuetify from "vuetify";
import Login from "@/components/Login";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Auth", () => {
  let vuetify;
  let actions;
  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      loginUser: jest.fn(),
    };
  });
  test("test login in button", () => {
    const store = new Vuex.Store({
      actions,
    });
    const wrapper = shallowMount(Login, { localVue, vuetify, store });
    const loginBtn = wrapper.findComponent({ ref: "loginBtn" });
    loginBtn.trigger("click");
    expect(actions.loginUser);
  });
});
