export default {
  props: {
    showDialog: Boolean,
    index: Number,
    statement: String
  },
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit("showDialogChange", value);
      }
    }
  }
};
