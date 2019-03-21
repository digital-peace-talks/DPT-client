import { VDialog, VBtnToggle } from "vuetify/lib";
import Message from "../../Chat/Message/Message.vue";

export default {
  components: { VDialog, VBtnToggle, message: Message },
  props: {
    showDialog: Boolean,
    reason: String
  },
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {}
    },
    chatID() {
      return this.$route.params.id;
    },
    statement() {
      return this.$store.getters.chats[this.chatID].statement;
    },
    message() {
      return [this.$store.getters.chats[this.chatID].messages[0]];
    },
    due() {
      return [this.$store.getters.chats[this.chatID].crisises[0].due];
    }
  },
  methods: {
    advanceCrisis() {
      this.show = false;
      this.$emit("advanceCrisis");
    }
  }
};
