export default {
  data: () => ({
    time: 1,
    time_ranges: [
      "hours",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "days",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  }),
  props: {
    showDialog: Boolean
  },
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit("showCrisisDialogChange", value);
      }
    }
  },
  methods: {
    time_range(val) {
      if (val > 23) {
        return val - 23 + " days";
      } else {
        return val + " hours";
      }
    }
  }
};
