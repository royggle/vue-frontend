<template>
  <div>
    <div class="board-container">
    <h3>Q ＆ A 掲示板</h3>
    <button class="write-button" @click="$router.push(`/update/${board_idx}`)">修正</button>
    </div>
    <hr class="d-block" />
    <div>
      <h4>ディテール</h4>
      <table>
        <tbody>
          <tr>
            <th>Writer</th>
            <td><input type="text" placeholder="id" v-model="board.id" readonly /></td>
          </tr>
          <tr>
            <th>Title</th>
            <td><input type="text" placeholder="Title" v-model="board.title" readonly /></td>
          </tr>
          <tr>
            <th>Contnent</th>
            <td><textarea placeholder="Contents" v-model="board.contents" readonly></textarea></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    board() {
      return this.$store.state.$boards.board
    },
    board_idx() {
      return this.$route.params.board_idx
    }
  },
  methods: {
  },
  created() {
    this.$store.dispatch('boardsDetail', this.board_idx)
  }
}
</script>
