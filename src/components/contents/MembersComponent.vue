<template>
  <div>
    <h3>Members</h3>
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
            <td>{{member.name}}</td>
            <td>{{member.age}}</td>
            <td>
              <button>Update</button>
              <button @click="membersDelete(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="d-block" />
    <div>
      <h4>Create</h4>
      <input type="text" placeholder="Name"  v-model="member.name" />
      <input type="text" placeholder="Age" v-model="member.age" />
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
  },
  created() {
    console.log(this.member)
    this.member.name = ''
    this.member.age = ''
    this.$store.dispatch('membersRead')
  }
}
</script>