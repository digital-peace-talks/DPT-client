  export default{
    data () {
      return {
        recentChats: 'Recent Chats'
      }
    },
    created () {
      this.$store.dispatch('loadChats')
    },
    computed: {
      chats () {
        return this.$store.getters.chats
      }
    }
  }
