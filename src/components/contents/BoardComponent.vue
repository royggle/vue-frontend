<template>
  <div>
    <div class="board-container">
    <h3>Q ＆ A 掲示板</h3>
    <button class="write-button" @click="$router.push('/write')">書き込み</button>
    </div>
    <hr class="d-block" />
    <div>
      <h4>リスト</h4>
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
          <!-- <tr v-for="(member, index) in " :key="index"> -->
          <tr v-for="(board, index) in boards" :key="index" class="tbody-tr">
            <td class="align-center">{{board.board_idx}}</td>
            <td class="title"><router-link :to="{path: `/detail/${board.board_idx}`}">{{board.title}}</router-link></td>
            <td class="align-center">{{board.id}}</td>
            <td class="align-center">{{moment(board.created_datetime).format('YYYY-MM-DD HH:mm')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  computed: {
    boards() {
      return this.$store.state.$boards.boards
    },
    moment() {
      return moment
    }
  },
  methods: {
  },
  created() {
    this.$store.dispatch('boardsRead')
  }
}

</script>

