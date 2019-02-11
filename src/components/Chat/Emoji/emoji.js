export default {
    data () {
      return {}
    },
    props: {
      emoji: ''
    },
    methods: {
      onEmojiClick () {
        this.$emit('click', this.emoji)
      }
    }
  }
