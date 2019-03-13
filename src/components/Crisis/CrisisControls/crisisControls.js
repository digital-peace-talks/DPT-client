import { VDialog, VSwitch } from "vuetify/lib";

export default {
  data() {
    return {
      solvedMe: true,
      solvedYou: true
    };
  },
  components: { VDialog, VSwitch },
  computed: {
    statement() {
      return this.$store.getters.chats[this.$route.params.id].statement;
    },
    reason() {
      return this.$store.getters.chats[this.$route.params.id].crisises[0]
        .reason;
    },
    lastComment() {
      return this.$store.getters.chats[this.$route.params.id].messages
        .filter(function(m) {
          return m.user;
        })
        .slice(-1)[0].content;
    }
  },
  props: {
    on: Object,
    state: Number
  }
};
