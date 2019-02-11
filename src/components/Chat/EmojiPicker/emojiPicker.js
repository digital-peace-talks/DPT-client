  import Emoji from './Emoji.vue'
  export default {
    data () {
      return {
        emojis: []
      }
    },
    props: {
      show: true
    },
    created () {
      this.$http.get('https://raw.githubusercontent.com/shanraisshan/EmojiCodeSheet/master/json/string/People.json').then(response => {
        this.emojis = response.body.peoples.people
      }, response => {
        // error callback
      })
    },
    methods: {
      onEmojiClick (emoji) {
        this.$emit('click', emoji)
      },
      closePicker () {
        this.$emit('close')
      }
    },
    components: {
      'emoji': Emoji
    }
  }
