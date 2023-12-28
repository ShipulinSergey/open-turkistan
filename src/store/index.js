// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: 'dark'
  },
  mutations: {
    setValue(state, keyValue) {
      state[keyValue.key] = keyValue.value;
    },
  },
  actions: {
    SET_VALUE({ commit }, keyValue) {
      commit('setValue', keyValue);
    },
  },
});
