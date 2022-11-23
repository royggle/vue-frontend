<template>
  <header>
    <h4>日本ゾイス株式会社</h4>
    <p><img class="logo-image" src="https://www.zois.co.jp/images/common/logo.png" alt="zois header logo"></p>  
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
