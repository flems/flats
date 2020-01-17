import httpRequest from '@/utils/http.js'

export default {
  state: {
    flats: [],
    currentFlat: {},
    loader: false
  },
  mutations: {
    setFlats: function (state, data) {
      state.flats = data;
    },
    setCurrentFlat: function (state, data) {
      state.currentFlat = data;
    },
    setFlatLoaderState: (state, loaderState) => {
      state.loader = loaderState
    }
  },
  actions: {
    getFlats: function ({ commit, rootState, getters }) {
      let formData = getters.currentFilters;
      formData.append('count', rootState.options.count);
      formData.append('page', rootState.options.page);

      return httpRequest(rootState.options.domain + '/include/ajax/flats.php', formData)
        .then((data) => {
          commit('setFlats', data);
        })
    },
    getFlatInfo: function ({ commit, rootState }, flatId) {
      const formData = new FormData();
      formData.append('id', flatId);

      return httpRequest(rootState.options.domain + '/include/ajax/flats.php', formData)
        .then((data) => {
          commit('setCurrentFlat', data['ITEMS'][0]);
        })
    }
  },
}
