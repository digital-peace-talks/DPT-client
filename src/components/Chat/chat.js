//TODO add scroll functionality
//TODO add emoji functionality

import Message from "./Message/Message.vue";
import Chats from "./Chats/Chats.vue";
import Crisis from "../Crisis/Crisis.vue";
import Success from "../Success/Success.vue";

export default {
  data() {
    return {
      showCrisisDialog: false,
      showSuccessDialog: false,
      content: "",
      chatMessages: [],
      chatStatement: ""
    };
  },
  props: ["id"],
  created() {
    this.$store.dispatch("loadChats");
  },
  mounted() {
    this.loadChat();
    //TODO: indicator for chats where the other user is online
  },
  components: {
    message: Message,
    chats: Chats,
    crisis: Crisis,
    success: Success
  },
  computed: {
    chats() {
      return this.$store.getters.chats;
    },
    messages() {
      return this.chatMessages;
    },
    statement() {
      return this.chatStatement;
    },
    username() {
      //TODO: username should be dynamic
      return "Iwan"; //this.$store.getters.user.username
    }
    // TODO: Turn chat strings that show links into active links
  },
  watch: {
    "$route.params.id"(newId, oldId) {
      this.loadChat();
    }
  },
  methods: {
    loadChat() {
      this.chatMessages = this.chats[this.id].messages;
      this.chatStatement = this.chats[this.id].statement;
      this.scrollToEnd();
    },
    sendMessage() {
      if (this.content !== "") {
        this.$store.dispatch("sendMessage", {
          username: this.username,
          content: this.content,
          date: new Date().toString(),
          chatID: this.id
        });
        this.content = "";
        this.scrollToEnd();
      }
    },
    scrollToEnd() {
      this.$nextTick(() => {
        var container = this.$el.querySelector(".chat-container");
        container.scrollTop = container.scrollHeight;
      });
    },
    handleShowCrisisDialogChanged(value) {
      this.showCrisisDialog = value;
    },
    handleShowSuccessDialogChanged(value) {
      this.showSuccessDialog = value;
    }
  }
};
