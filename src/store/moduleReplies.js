import axios from 'axios'

export const moduleReplies = {
  state: {
    replies: [],
    reply: {
      contents: ''
    },
  },
  mutations: {
    repliesRead(state, replies) {
      state.replies = replies
    },
  },
  actions: {
    repliesCreate(thisStore, { reply, board_idx, callback }) {
      axios.post('http://localhost:8081/api/v1/replies', {
        board_idx,
        contents: reply.contents
      }).then(function(response) {
        console.log('Done repliesCreate', response)
        alert('完了')
        callback()
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    repliesRead(thisStore) {
      axios.get('http://localhost:8081/api/v1/replies').then(function(response) {
        console.log('Done repliesRead', response)
        thisStore.commit('repliesRead', response.data.replies)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    repliesDelete(thisStore, { reply_idx, callback }) {
      axios.delete(`http://localhost:8081/api/v1/replies/${reply_idx}`).then(function(response) {
        console.log('Done repliesDelete', response)
        alert('削除処理')
        callback()
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}