export const moduleMembers = {
  state: {
    members: [],
    member: {
      name: '',
      age: ''
    }
  },
  mutations: {
  },
  actions: {
    membersCreate(thisStore, member) {
      thisStore.state.members.push({
        name: member.name,
        age: member.age
      })
      console.log('Done membersCreate', thisStore.state.members)
    }
  }
}