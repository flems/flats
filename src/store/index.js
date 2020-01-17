import Vue from 'vue'
import Vuex from 'vuex'
import flats from './modules/flats.js'
import filters from './modules/filters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {
      domain: '//molokovo12/',
      page: 1,
      count: 20
    }
  },
  mutations: {
    setPage: function (state, page) {
      state.options.page = page
    }
  },
  actions: {
  },
  modules: {
    flats,
    filters
  }
})
