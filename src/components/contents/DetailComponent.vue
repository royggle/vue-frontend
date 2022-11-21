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
            <th>Content</th>
            <td><textarea placeholder="Contents" v-model="board.contents" readonly></textarea></td>
          </tr>
        </tbody>
      </table>
      <div v-for="(reply, index) in replies" :key="index" class="replies">
        <div class="id">
          <h4>{{reply.id}}</h4>
          <button v-if="isLogin" @click="repliesDelete(reply.reply_idx)">delete</button>
        </div>
        <pre>{{reply.contents}}</pre>
      </div>
      <hr class="d-block" />
      <div v-if="isLogin">
        <table>
          <tbody>
            <tr>
              <th>コメント</th>
              <td><textarea placeholder="Contents" v-model="reply.contents"></textarea></td>
            </tr>
          </tbody>
        </table>
        <div class="button-right">
          <button @click="repliesCreate(reply)">度録</button>
        </div>
      </div>
      <div v-else>
        댓글은 관리자로 로그인 해야 달 수 있습니다.
      </div>
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
    },
    replies() {
      return this.$store.state.$replies.replies
    },
    reply() {
      return this.$store.state.$replies.reply
    },
    isLogin() {
      return this.$store.state.$members.isLogin
    }
  },
  methods: {
    repliesCreate(reply) {
      const callback = () => {
        this.$store.dispatch('boardsDetail', this.board_idx)  
      }
      this.$store.dispatch('repliesCreate', {
        reply,
        board_idx: this.board_idx,
        callback
      })
    },
    repliesDelete(reply_idx) {
      if (!confirm('Are you sure?')) return
      const callback = () => {
        this.$store.dispatch('boardsDetail', this.board_idx)  
      }
      this.$store.dispatch('repliesDelete', {
        reply_idx,
        callback
      })
    }
  },
  created() {
    this.$store.dispatch('boardsDetail', this.board_idx)
  }
}
</script>
