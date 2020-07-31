import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 821
  },
  mutations: {
    add (state) {
      state.count++
    },
    jj (state) {
      state.count--
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  modules: {
  }
})
