<template>
  <div>
    <div class="board-container">
    <h2>書き込み</h2>
    </div>
    <hr class="d-block" />
    <div>
      <table>
        <tbody>
          <tr>
            <th>Writer</th>
            <td><input type="text" placeholder="ID" v-model="board.id" /></td>
          </tr>
          <tr>
            <th>Title</th>
            <td><input type="text" placeholder="Title" v-model="board.title" /></td>
          </tr>
          <tr>
            <th>Contnent</th>
            <td><textarea placeholder="Contents" v-model="board.contents"></textarea></td>
          </tr>
          <tr>
            <th>password</th>
            <td><input type="password" placeholder="Password" v-model="board.password" /></td>
          </tr>
        </tbody>
      </table>
      <div class="button-right">
        <button @click="boardsCreate(board)">完了</button>
      </div>
    </div>
    <hr class="d-block" />
  </div>
</template>
<script>
  export default {
  computed: {
    board() {
      return this.$store.state.$boards.board
    },

  },
  methods: {
    boardsCreate(board) {
      const callback = () => {
        this.$router.push('/board')
      }
      this.$store.dispatch('boardsCreate', {
        board,
        callback
      })
    }
  },
  created() {
    this.board.id = ''
    this.board.title = ''
    this.board.contents = ''
    this.board.password = ''
  }
}
</script>

