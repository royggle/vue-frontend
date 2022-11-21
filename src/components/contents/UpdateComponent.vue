<template>
  <div>
    <div class="board-container">
    <h3>Q ＆ A 掲示板</h3>
    </div>
    <hr class="d-block" />
    <div>
      <h4>修正</h4>
      <table>
        <tbody>
          <tr>
            <th>Writer</th>
            <td><input type="text" placeholder="id" v-model="board.id" readonly/></td>
          </tr>
          <tr>
            <th>Title</th>
            <td><input type="text" placeholder="Title" v-model="board.title" /></td>
          </tr>
          <tr>
            <th>Contnent</th>
            <td><textarea placeholder="Contents" v-model="board.contents"></textarea></td>
          </tr>
        </tbody>
      </table>
      <div class="button-right">
        <button @click="boardsDelete()">削除</button>
        <button @click="boardsUpdate(board)">完了</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    board() {
      return this.$store.state.$boards.board
    }
  },
  methods: {
    boardsUpdate(board) {
      const callback = () => {
        this.$router.push('/board')
      }
      this.$store.dispatch('boardsUpdate', {
        board,
        board_idx: this.$route.params.board_idx,
        callback
      })
    },
    boardsDelete() {
      if (!confirm('Are you sure?')) return
      const callback = () => {
        this.$router.push('/board')
      }
      this.$store.dispatch('boardsDelete', {
        board_idx: this.$route.params.board_idx,
        callback
      })
    },
    
  },
  created() {
    this.$store.dispatch('boardsDetail', this.$route.params.board_idx)
  }
}
</script>