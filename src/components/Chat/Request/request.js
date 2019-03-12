export default {
  props: {
    value: Boolean,
    index: Number,
    id: "$route.params.id"
  },
  computed: {
    statement() {
      return this.$store.getters.chats[this.$route.params.id].statement;
    },
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
