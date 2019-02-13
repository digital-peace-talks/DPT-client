//TODO switch messages contents between chats
//TODO enable sending a message
//TODO add scroll functionality
//TODO add emoji functionality

import Message from "./Message/Message.vue";
import Chats from "./Chats/Chats.vue";

export default {
  data() {
    return {
      content: "",
      chatMessages: [],
      chatStatement:"",
      emojiPanel: false,
      currentRef: {},
      loading: false,
      totalChatHeight: 0,
    };
  },
  props: ["id"],
  created(){
    this.$store.dispatch('loadChats');
  },
  mounted() {
    this.loadChat();
    //TODO: indicator for chats where the other user is online
  },
  components: {
    message: Message,
    chats: Chats
  },
  computed: {
    chats () {
      return this.$store.getters.chats
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
    },
  }
};
