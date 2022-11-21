<template>
  <div>
    <div class="board-container">
    <h3>Q ＆ A 掲示板</h3>
    </div>
    <hr class="d-block" />
    <div>
      <h4>書き込み</h4>
      <table>
        <thead>
          <tr>
            <th>Writer</th>
            <td><input type="text" placeholder="id" v-model="board.id" /></td>
          </tr>
          <tr>
            <th>Title</th>
            <td><input type="text" placeholder="Title" v-model="board.title" /></td>
          </tr>
          <tr>
            <th>Contnent</th>
            <td><textarea placeholder="Contents" v-model="board.contents"></textarea></td>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(member, index) in " :key="index"> -->
          <tr>
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
}
</script>

