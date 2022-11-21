import { createStore } from 'vuex'
import { moduleMembers } from './moduleMembers.js'
import { moduleBoards } from './moduleBoards.js'
import { moduleReplies } from './moduleReplies.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    axiosError(thisStore, error) {
      console.error(error.response || error.message || error)
      alert((error.response && error.response.statusText) || error.message || '알 수 없는 오류가 발생 하였습니다.')
    }
  },
  modules: {
    $members: moduleMembers,
    $boards: moduleBoards,
    $replies: moduleReplies
  }
})
