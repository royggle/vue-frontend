<template>
  <footer>{{title}}</footer>
</template>
<!-- 가장 아래에 추가 -->
<script>
export default {
  props: {
    title: {
      default: 'Copyright'
    }
  }
}
</script>