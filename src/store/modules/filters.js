import httpRequest from '@/utils/http.js'

export default {
  state: {
    room: null,
    stage: null,
    porch: null,
    price: null,
    area: null
  },
  mutations: {
    setRoomFilter: function (state, data) {
      const checkState = data.checked;
      const val = Number(data.value);
      const index = state.room.findIndex(obj => obj.val === val);
      state.room[index]['checkState'] = checkState;
    },
    setStageFilter: (state, data) => {
      const stage = Object.assign({}, state.stage);
      stage.val = data;
      state.stage = stage;
    },
    setAreaFilter: (state, data) => {
      const area = Object.assign({}, state.area);
      area.val = data;
      state.area = area;
    },
    setPriceFilter: (state, data) => {
      const price = Object.assign({}, state.price);
      price.val = data;
      state.price = price;
    },
    setDefaultFilters: (state, data) => {
      for (let key in data) {
        if(key === 'room') { //checkbox
          const roomArr = [];
          for (let i = Number(data.room.min); i <= Number(data.room.max); i++) {
            const roomObj = {};
            roomObj.checkState = false;
            roomObj.val = i;
            roomArr.push(roomObj);
          }
          state.room = roomArr;
        } else { //range input
          const tempObj = data[key];
          tempObj.val = [data[key].min, data[key].max];
          state[key] = tempObj;
        }
      }
    }
  },
  actions: {
    getFilters: function ({ state, commit, rootState }) {
      if (!state.room) {
        const url = rootState.options.domain + '/include/ajax/flatFilters.php';
        httpRequest(url).then((data) => {
          commit('setDefaultFilters', data);
        })
      }
    },
    resetFilters: ({ state, commit }) => {
      const room = state.room.concat();
      room.forEach(function(item, index) {
        item.checkState = false;
      })
      state.room = room;

      commit('setAreaFilter', [state.area.min, state.area.max])
      // commit('setPriceFilter', [state.price.min, state.price.max])
      commit('setStageFilter', [state.stage.min, state.stage.max])

    },
  },
  getters: {
    currentFilters: (state) => {
      const formData = new FormData();
      if (state.room) {
        const room = state.room
        .filter(item => item.checkState)
        .map((item) =>item.val);
        formData.append('room', room);
        formData.append('stage', state.stage.val);
        formData.append('area', state.area.val);
        // formData.append('price', state.price.val);
      }

      return formData
    }
  }
}
