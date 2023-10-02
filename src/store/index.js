import Api from "../axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as cookies from "js-cookie";
const state = {
  user: null,
};
const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setToken(state, token) {
    state.token = token;
  },

  setUserName(state, name) {
    state.user.name = name;
  },
  setUserEmail(state, email) {
    state.user.email = email;
  },
  setUserImage(state, path) {
    state.user.image = path;
  },
};

const actions = {
  async signup(context, { name, email, password }) {
    const res = await Api.post("/auth/signup", { name, email, password });
    if (res.status === 201) {
      const user = res.data.user;
      context.commit("setUser", user);
    } else {
      throw new Error(res.response.data.message);
    }
    try {
    } catch (error) {
      throw error;
    }
  },
  async login(context, { email, password }) {
    const res = await Api.post("/auth/login", { email, password });
    if (res.status === 200) {
      const user = res.data.user;
      context.commit("setUser", user);
    } else {
      throw new Error(res.response.data.message);
    }
    try {
    } catch (error) {
      throw error;
    }
  },

  async Logout(context) {
    try {
      await Api.get("/auth/logout");

      context.commit("setToken", null);
      context.commit("setUser", null);
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {};
const modules = {};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [
    createPersistedState({
      getState: (key) => cookies.getJSON(key),
      setState: (key, state) =>
        cookies.set(key, state, { expires: 3, secure: true }),
    }),
  ],
});
