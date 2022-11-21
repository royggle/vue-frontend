import axios from 'axios'

export const moduleBoards = {
  state: {
    boards: [],
    board: {
      id: '',
      title: '',
      contents: ''
    },
  },
  mutations: {
    boardsRead(state, boards) {
      state.boards = boards
    }
  },
  actions: {
    boardsCreate(thisStore, { board, callback }) {
      axios.post('http://localhost:8081/api/v1/boards', board).then(function(response) {
        console.log('Done boardsCreate', response)
        alert('完了')
        callback()
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    boardsRead(thisStore) {
      axios.get('http://localhost:8081/api/v1/boards').then(function(response) {
        console.log('Done boardsRead', response)
        thisStore.commit('boardsRead', response.data.boards)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersDelete(thisStore, index) {
      thisStore.state.members.splice(index, 1)
      console.log('Done membersDelete', thisStore.state.members)
    },
    membersUpdate(thisStore, { index, member }) {
      thisStore.state.members[index] = member
      console.log('Done membersUpdate', thisStore.state.members)
    }
  }
}