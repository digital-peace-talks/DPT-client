import { VDialog, VToolbar } from "vuetify/lib";

export default {
  data() {
    return {
      time: 1,
      reason: "",
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
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit("showSuccessDialogChange", value);
      }
    }
  },
  components: { VDialog, VToolbar },
  props: {
    on: Object
  },
  methods: {
    handleCrisisStart() {
      this.show = false;
      this.startCrisis();
    },
    time_range(val) {
      return val > 23 ? val - 23 : val;
    },
    startCrisis() {
      this.$emit("crisisStartEvent", {
        reason: this.reason,
        due: this.time
      });
      this.$emit("advanceCrisis");
    }
  }
};
