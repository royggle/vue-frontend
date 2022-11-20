import axios from 'axios'

export const moduleMembers = {
  state: {
    members: [],
    member: {
      id: '',
      name: '',
      password: ''
    }
  },
  mutations: {
    membersRead(state, members) {
      state.members = members
    }
  },
  actions: {
    membersCreate(thisStore, member) {
      // thisStore.state.members.push({
      //   name: member.name,
      //   age: member.age
      // })
      // console.log('Done membersCreate', thisStore.state.members)
      axios.post('http://localhost:8081/api/v1/members', member).then(function(response) {
        console.log('Done membersCreate', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersRead(thisStore) {
      const members = [{
        name: '홍길동',
        age: 20
      }, {
        name: '춘향이',
        age: 16
      }]
      // thisStore.state.members = members
      thisStore.commit('membersRead', members)
      console.log('Done membersRead', thisStore.state.members)
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