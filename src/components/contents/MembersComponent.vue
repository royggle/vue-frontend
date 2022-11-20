<template>
  <div>
    <h3>会員リスト</h3>
    <hr class="d-block" />
    <div>
      <h4>Read</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="index">
            <td><input type="text" placeholder="ID" v-model="member.id" /></td>
            <td><input type="text" placeholder="Name" v-model="member.name" /></td>
            <td><input type="password" placeholder="Password" v-model="member.password" /></td>
            <td>
              <button @click="membersUpdate(index, member)">Update</button>
              <button @click="membersDelete(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="d-block" />
    <div>
      <h4>Create</h4>
      <input type="text" placeholder="ID"  v-model="member.id" />
      <input type="text" placeholder="Name"  v-model="member.name" />
      <input type="password" placeholder="Password" v-model="member.password" />
      <button @click="membersCreate(member)">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    member() {
      return this.$store.state.$members.member
    },
    members() {
      return this.$store.state.$members.members
    }
  },
  methods: {
    membersCreate(member) {
      this.$store.dispatch('membersCreate', member)
    },
    membersDelete(index) {
      this.$store.dispatch('membersDelete', index)
    },
    membersUpdate(index, member) {
      this.$store.dispatch('membersUpdate', { index, member })
    }
  },
  created() {
    console.log(this.member)
    this.member.name = ''
    this.member.age = ''
    this.$store.dispatch('membersRead')
  }
}
</script>