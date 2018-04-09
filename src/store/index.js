import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    api: 'https://swapi.co/api/',
    finished: false,
    characters: [],
    loaded: false
  },
  mutations
})

export default store
