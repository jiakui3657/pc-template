/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import $http from "../http/http.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    size: 10
  },
  mutations: {
    addUserInfo(state, info) {
      state.userInfo = info;
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      try {
        const data = await $http.fetchPost("/rest/agent/info.htm");
        if (data.code == 0) {
          window.console.log(data);
          commit("addUserInfo", data);
        }
      } catch (err) {
        window.console.log(err);
      }
    }
  },
  modules: {}
});
