<template>
    <div class="black-bg" v-show="isShow">
      <div class="white-bg">
        <h5>パスワードを入力してください</h5>
        <br/>
        <td><input type="password" placeholder="Password" v-model="board.password" /></td>
        <br/> 
        <button @click="passwordCheck(board.password)" type="button">確認</button>
      </div>
    </div>
  <div>
    <div class="board-container">
    <h2>詳細ページ</h2>
    <button class="write-button" @click="handle_toggle">修正</button>
    <!-- <button class="write-button" @click="$router.push(`/update/${board_idx}`)">修正</button> -->
    </div>
    <hr class="d-block" />
    <div>
      <table>
        <tbody>
          <tr>
            <th>Writer</th>
            <td><input type="text" placeholder="ID" v-model="board.id" readonly /></td>
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
        コメントは管理者としてログインしないと書き込めません。
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
  data() {
    return {
      isShow: false 
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
    },
    close(event) {
      if (event.target.classList.contains('black-bg') || event.target.classList.contains('close')) {
        this.openModal = false
      }
      else if (event.target.classList.contains('white-bg')) {
        this.openModal = true
      }
    },
    handle_toggle(){ 
      this.isShow = !this.isShow; // #2, #3
    },
    passwordCheck(password) {
      console.log("password: " + this.board.password);
      this.$store.dispatch('passwordCheck', {
        board_idx: this.board_idx,
        password,
        callback: () => {
          this.$router.push(`/update/${this.board_idx}`)
        }
      })
    },
  },
  created() {
    this.$store.dispatch('boardsDetail', this.board_idx)
  }
}
</script>
