  import Message from './Message/Message.vue'
  //import EmojiPicker from './EmojiPicker.vue'
  import Chats from './Chats/Chats.vue'
  import * as firebase from 'firebase'
  export default {
    data () {
      return {
        content: '',
        chatMessages: [],
        emojiPanel: false,
        currentRef: {},
        loading: false,
        totalChatHeight: 0
      }
    },
    props: [
      'id'
    ],
    mounted () {
      this.loadChat()
      //this.$store.dispatch('loadOnlineUsers')
    },
    components: {
      'message': Message,
      //'emoji-picker': EmojiPicker,
      'chats': Chats
    },
    computed: {
      messages () {
        return this.chatMessages
      },
      username () {
        return "Iwan" //this.$store.getters.user.username
      },
      onChildAdded () {
        const that = this
        let onChildAdded = function (snapshot, newMessage = true) {
          let message = snapshot.val()
          message.key = snapshot.key
          /*eslint-disable */
          var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
          /*eslint-enable */
          message.content = message.content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
          message.content = message.content.replace(urlPattern, "<a href='$1'>$1</a>")
          if (!newMessage) {
            that.chatMessages.unshift(that.processMessage(message))
            // that.scrollTo()
          } else {
            that.chatMessages.push(that.processMessage(message))
            // that.scrollToEnd()
          }
        }
        return onChildAdded
      }
    },
    watch: {
      '$route.params.id' (newId, oldId) {
        this.currentRef.off('child_added', this.onChildAdded)
        this.loadChat()
      }
    },
    methods: {
      loadChat () {
        // this.totalChatHeight = this.$refs.chatContainer.scrollHeight
        this.loading = false
        if (this.id !== undefined) {
          this.chatMessages = []
          let chatID = this.id
        }
      },
      // onScroll () {
      //   let scrollValue = this.$refs.chatContainer.scrollTop
      //   const that = this
      //   if (scrollValue < 100 && !this.loading) {
      //     this.totalChatHeight = this.$refs.chatContainer.scrollHeight
      //     this.loading = true
      //     let chatID = this.id
      //     let currentTopMessage = this.chatMessages[0]
      //     if (currentTopMessage === undefined) {
      //       this.loading = false
      //       return
      //     }
      //       // function (snapshot) {
      //       //   let tempArray = []
      //       //   snapshot.forEach(function (item) {
      //       //     tempArray.push(item)
      //       //   })
      //       //   if (tempArray[0].key === tempArray[1].key) return
      //       //   console.log(tempArray)
      //       //   tempArray.reverse()
      //       //   tempArray.forEach(function (child) { that.onChildAdded(child, false) })
      //       //   that.loading = false
      //       // }
      //     // )
      //   }
      // },
      processMessage (message) {
        /*eslint-disable */
        var imageRegex = /([^\s\']+).(?:jpg|jpeg|gif|png)/i
        /*eslint-enable */
        if (imageRegex.test(message.content)) {
          message.image = imageRegex.exec(message.content)[0]
        }
        var emojiRegex = /([\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{2934}-\u{1f18e}])/gu
        if (emojiRegex.test(message.content)) {
          message.content = message.content.replace(emojiRegex, '<span class="emoji">$1</span>')
        }
        return message
      },
      sendMessage () {
        if (this.content !== '') {
          this.$store.dispatch('sendMessage', { username: this.username, content: this.content, date: new Date().toString(), chatID: "1" })
          this.content = ''
        }
      },
      // scrollToEnd () {
      //   this.$nextTick(() => {
      //     var container = this.$el.querySelector('.chat-container')
      //     container.scrollTop = container.scrollHeight
      //   })
      // },
      // scrollTo () {
      //   this.$nextTick(() => {
      //     let currentHeight = this.$refs.chatContainer.scrollHeight
      //     let difference = currentHeight - this.totalChatHeight
      //     var container = this.$el.querySelector('.chat-container')
      //     container.scrollTop = difference
      //   })
      // },
      addMessage (emoji) {
        this.content += emoji.value
      },
      toggleEmojiPanel () {
        this.emojiPanel = !this.emojiPanel
      }
    }
  }
