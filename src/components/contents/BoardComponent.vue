<template>
  <div>
    <div class="board-container">
    <h2>リスト</h2>
    <button class="write-button" @click="$router.push('/write')">書き込み</button>
    </div>
    <hr class="d-block" />
    <div>
      <table class="board-list-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(board, index) in boards" :key="index" class="tbody-tr">
            <td class="align-center">{{board.board_idx}}</td>
            <td class="title"><router-link :to="{path: `/detail/${board.board_idx}`}">{{board.title}}</router-link></td>
            <td class="align-center">{{board.id}}</td>
            <td class="align-center">{{moment(board.created_datetime).format('YYYY-MM-DD HH:mm')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="page-nav">
      <span v-for="(_page, index) in navPaging()" :key="index">
        <router-link :to="{name: 'Board', query: {page: _page}}" :class="{active: page === _page}">[{{_page}}]</router-link>
      </span>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  computed: {
    count() {
      return this.$store.state.$boards.count
    },
    boards() {
      return this.$store.state.$boards.boards
    },
    moment() {
      return moment
    },
    page() {
      return Number(this.$route.query.page) ? Number(this.$route.query.page) : 1
    }
  },
  watch: {
    '$route.query': function(query, beforeQuery) {
      console.log(query, beforeQuery)
      this.q = query.q || ''
      this.$store.dispatch('boardsRead', this.page)
    }
  },
  methods: {
    navPaging() {
      const page = this.page;
      const pageSize = 5;
      const navSize = 5;
      const pageMax = Math.ceil(this.count / pageSize);
      const navs = [];
      for (let index = 1; index <= navSize; index++) {
        const navCalc = Math.ceil(page / navSize) * navSize - navSize + index;
        if (navCalc <= pageMax && page <= pageMax) {
          navs.push(navCalc);
        }
      }
      return navs;
    }
  },
  created() {
    this.$store.dispatch('boardsRead', 1)
  }
}
</script>

