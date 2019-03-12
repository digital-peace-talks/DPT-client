export default {
  data() {
    return {
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
        "days",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      selectedDate: ""
    };
  },
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
      return val > 23 ? val - 23 : val;
    }
  }
};
