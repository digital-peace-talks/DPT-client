import Request from "../Request/Request.vue";

export default {
  data() {
    return {
      recentChats: "Recent Chats",
      showRequestDialog: false,
      selectedStatement: "",
      selectedIndex: 0
    };
  },
  created() {
    this.$store.dispatch("loadChats");
  },
  components: {
    request: Request
  },
  computed: {
    chats() {
      return this.$store.getters.chats;
    }
  },
  methods: {
    /**
     * sets showRequestDialog by to the value of the event's payload
     * @param {boolean} value the showRequestDialog current value
     */
    handleShowRequestsDialogChanged(value) {
      this.showRequestDialog = value;
    },
    /**
     * Handles a click on a statement
     * @param {number} statementId ID of the statement that was clicked upon
     * @param {string} statementText Content of the clicked statement
     */
    handleStatementClicked(statementId, statementText) {
      if (this.$route.params.id !== undefined) {
        this.$router.push(`/chat/${statementId}`);
      } else {
        this.selectedIndex = statementId;
        this.selectedStatement = statementText;
        this.showRequestDialog = true;
      }
    }
  }
};
