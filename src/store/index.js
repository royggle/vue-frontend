import { createStore } from 'vuex'
import { moduleMembers } from './moduleMembers.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    axiosError(thisStore, error) {
      console.error(error.response)
      alert(error.response || error.response.data || error.response.data.error)
    }
  },
  modules: {
    $members: moduleMembers
  }
})
