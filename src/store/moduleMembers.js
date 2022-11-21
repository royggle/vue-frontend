import axios from 'axios'

const axiosDefaultsHeaders = function(token) {
  if (token) {
    localStorage.setItem('x-jwt-token', token)
    axios.defaults.headers.common['x-jwt-token'] = token
  } else if (localStorage.getItem('x-jwt-token')) {
    axios.defaults.headers.common['x-jwt-token'] = localStorage.getItem('x-jwt-token')
  }
}
axiosDefaultsHeaders()

export const moduleMembers = {
  state: {
    members: [],
    member: {
      id: '',
      name: '',
      password: ''
    },
    isLogin: !!localStorage.getItem('x-jwt-token')
  },
  mutations: {
    membersRead(state, members) {
      state.members = members
    }
  },
  actions: {
    membersLogin(thisStore, {member, callback}) {
      axios.post('http://localhost:8081/api/v1/members/login', member).then(function(response) {
        console.log('Done membersLogin', response)
        if (response.data === 'No User') {
          alert('회원정보가 없습니다.')
        } else {
          axiosDefaultsHeaders(response.data)
          thisStore.state.isLogin = true
          callback()
        }
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}