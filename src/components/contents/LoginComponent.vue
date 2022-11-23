<template>
  <div class="login-page">
    <h2>ログイン</h2>
    <hr class="d-block" />
    <div>
      <table>
        <tbody>
          <!-- <tr v-for="(member, index) in " :key="index"> -->
          <tr>
            <td class="login-menu"> I D </td>
            <td><input type="text" placeholder="ID" v-model="member.id" /></td>
          </tr>
          <tr>
            <td class="login-menu"> PASSWORD </td>
            <td><input type="password" placeholder="Password" v-model="member.password" /></td>
            <td>
              <button @click="membersLogin(member)">Login</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    member() {
      return this.$store.state.$members.member
    }
  },
  methods: {
    membersLogin(member) {
      this.$store.dispatch('membersLogin', {
        member,
        callback: () => {
          this.$router.push('/board')
        }
      })
    }
  },
  created() {
    this.member.id = ''
      this.member.password = ''
  }
}
</script>
