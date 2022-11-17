<template>
  <div id="app">
    <header-component v-show="true"></header-component>
    <hr />
    <div class="container">
      <nav-component v-if="true"></nav-component>
      <hr />
      <section class="contents">
        <div>
          <h3>Members</h3>
          <p>Contents</p>
        </div>
      </section>
      <hr />
    </div>
    <footer-component :title="'카피라이트'"></footer-component>
  </div>
</template>

<!-- 가장 아래에 추가 -->
<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    NavComponent,
    FooterComponent,
  }
}
</script>