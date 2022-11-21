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
    },
    boardsDetail(state, board) {
      state.board = board
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
    boardsDetail(thisStore, board_idx) {
      axios.get(`http://localhost:8081/api/v1/boards/${board_idx}`).then(function(response) {
        console.log('Done boardsDetail', response)
        thisStore.commit('boardsDetail', response.data.board)
        thisStore.commit('repliesRead', response.data.replies)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    boardsDelete(thisStore, { board_idx, callback }) {
      axios.delete(`http://localhost:8081/api/v1/boards/${board_idx}`).then(function(response) {
        console.log('Done boardsDelete', response)
        alert('削除処理')
        callback()
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    boardsUpdate(thisStore, { board_idx, board, callback }) {
      axios.put(`http://localhost:8081/api/v1/boards/${board_idx}`, board).then(function(response) {
        console.log('Done boardsUpdate', response)
        alert('完了')
        callback()
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}