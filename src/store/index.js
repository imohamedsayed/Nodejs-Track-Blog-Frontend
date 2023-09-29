import axios from "axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as cookies from "js-cookie";
const state = {
  user: null,
  token: null,
  cart: [],
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
  Logout(context) {
    context.commit("setToken", null);
    context.commit("setUser", null);
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
