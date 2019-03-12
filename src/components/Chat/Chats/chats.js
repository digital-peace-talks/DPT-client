import Request from "../Request/Request.vue";

export default {
  data() {
    return {
      recentChats: "Recent Chats"
    };
  },
  created() {
    this.$store.dispatch("loadChats");
  },
  components: {
    message: Request
  },
  computed: {
    chats() {
      return this.$store.getters.chats;
    }
  },
  methods: {
    // chatExists() {
    //   if(this.chats[])
    //     addNewChat
    // }
  }
};
