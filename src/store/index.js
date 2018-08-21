import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)
const commonMutations = {
  test (state, author) {
    state.author = author
  }
}
const commonActions = {// actions
}
const store = new Vuex.Store({
  state: {
    author: '百兆',
    version: '0.0.1-beta'
  },
  mutations: commonMutations,
  actions: commonActions,
  modules: {
    user
  }
})
export default store
