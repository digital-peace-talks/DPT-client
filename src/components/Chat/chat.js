//TODO switch messages contents between chats
//TODO enable sending a message
//TODO add scroll functionality
//TODO add emoji functionality

import Message from "./Message/Message.vue";
import Chats from "./Chats/Chats.vue";
import * as firebase from "firebase";

export default {
  data() {
    return {
      content: "",
      chatMessages: [],
      emojiPanel: false,
      currentRef: {},
      loading: false,
      totalChatHeight: 0
    };
  },
  props: ["id"],
  mounted() {
    this.loadChat();
    //TODO: indicator for chats where the other user is online
  },
  components: {
    message: Message,
    chats: Chats
  },
  computed: {
    messages() {
      return this.chatMessages;
    },
    username() {
      //TODO: username should be dynamic
      return "Iwan"; //this.$store.getters.user.username
    },
    // TODO: Turn chat strings that show links into active links
  },
  watch: {
    "$route.params.id"(newId, oldId) {
      //this.currentRef.off('child_added', this.onChildAdded)
      this.loadChat();
    }
  },
  methods: {
    loadChat() {
      this.chatMessages = [
        { user: "alice", content: "the" },
        { user: "bob", content: "quick" },
        { user: "alice", content: "brown" },
        { user: "bob", content: "fox" },
        { user: "alice", content: "jumped" },
        { user: "bob", content: "over" },
        { user: "alice", content: "the" },
        { user: "bob", content: "lazy" },
        { user: "alice", content: "dog" }
      ];
    },
  }
};
