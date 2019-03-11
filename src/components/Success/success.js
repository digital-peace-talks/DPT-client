export default {
  props: {
    id: "$route.params.id",
    showDialog: Boolean
  },
  computed: {
    statement() {
      return this.$store.getters.chats[this.$route.params.id].statement;
    },
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit("showSuccessDialogChange", value);
      }
    }
  }
};
