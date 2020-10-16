import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    repos: null,
    followers: null,
    following: null,
    languages: [],
    gists: null
  },
  getters: {
    USER(state) {
      return state.user;
    },
    REPO(state) {
      return state.repos;
    },
    FOLLOWERS(state) {
      return state.followers;
    },
    FOLLOWING(state) {
      return state.following;
    },
    LANGUAGES(state) {
      return state.languages;
    },
    GISTS(state) {
      return state.gists;
    },
  },
  mutations: {
    USER(state, user) {
      state.user = user;
    },
    REPO(state, search) {
      state.repos = search;
    },
    FOLLOWERS(state, followers) {
      state.followers = followers;
    },
    FOLLOWING(state, following) {
      state.following = following;
    },
    LANGUAGES(state, language) {
      if (typeof language.message === "undefined") {
        for (const prop in language)
          state.languages.push({
            name: prop,
            y: language[prop],
          });
      }else{
        state.languages = []
      }
    },
    GISTS(state, gists) {
      state.gists = gists;
    },
  },
  actions: {
    USER(context, search) {
      fetch("https://api.github.com/users/" + search)
        .then((response) => response.json())
        .then((res) => {
          context.commit("USER", res);
        });
    },
    REPO(context, search) {
      fetch("https://api.github.com/users/" + search + "/repos")
        .then((response) => response.json())
        .then((res) => {
          context.commit("REPO", res);
        });
    },
    FOLLOWERS(context, search) {
      fetch("https://api.github.com/users/" + search + "/followers")
        .then((response) => response.json())
        .then((res) => {
          context.commit("FOLLOWERS", res);
        });
    },
    FOLLOWING(context, search) {
      fetch("https://api.github.com/users/" + search + "/following")
        .then((response) => response.json())
        .then((res) => {
          context.commit("FOLLOWING", res);
        });
    },
    LANGUAGES(context, search) {
      fetch("https://api.github.com/repos/" + search + "/alva/languages")
        .then((response) => response.json())
        .then((res) => {
          context.commit("LANGUAGES", res);
        });
    },
    GISTS(context, search) {
      fetch("https://api.github.com/users/" + search + "/gists")
        .then((response) => response.json())
        .then((res) => {
          context.commit("GISTS", res);
        });
    },
  },
  modules: {},
});
