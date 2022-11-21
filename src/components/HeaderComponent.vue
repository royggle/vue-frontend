<template>
  <header style="display: flex">
    <h1 style="flex: 1">日本ゾイス株式会社</h1>
    <h2 class="login-button" v-if="!isLogin"><router-link :to="{name: 'Login'}" active-class="active">Login</router-link></h2>
    <h2 class="login-button" v-else><router-link :to="{name: 'Login'}" @click="logout()" active-class="active">Logout</router-link></h2>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    isLogin() {
      console.log(this.$store.state.$members.isLogin)
      return this.$store.state.$members.isLogin
    }
  },
  methods: {
    logout() {
      this.$store.state.$members.isLogin = false
      axios.defaults.headers.common['x-jwt-token'] = null
      localStorage.removeItem('x-jwt-token')
      this.$router.push('/login')
    }
  }
}
</script>
