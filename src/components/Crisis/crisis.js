import CrisisControls from "./CrisisControls/CrisisControls.vue";
import CrisisNotice from "./CrisisNotice/CrisisNotice.vue";

export default {
  data: () => ({
    show: false,
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
    selectedDate: "",
    crisisENUM: Object.freeze({
      NOT_STARTED: 0,
      PENDING: 1,
      ONGOING: 2,
      RESOLVED: 3,
      FAILURE: 4
    })
  }),
  props: {
    reason: String,
    initialStatus: Number,
    chatID: String
  },
  computed: {
    crisisStatus: {
      get() {
        return this.initialStatus;
      },
      set(value) {
        this.$emit("crisisStatusChange", this.crisisENUM[value]);
      }
    }
  },
  components: {
    crisisControls: CrisisControls,
    crisisNotice: CrisisNotice
  },
  methods: {
    time_range(val) {
      return val > 23 ? val - 23 : val;
    },
    handleCrisisStart() {
      this.show = false;
      this.startCrisis();
    },
    startCrisis() {
      this.$store.dispatch("addCrisis", {
        initiator: "Bob",
        recipient: "Iwan",
        reason: this.reason,
        date: new Date().toString(),
        chatID: this.$route.params.id
      });
      this.crisisStatus = this.crisisENUM.PENDING;
      console.log(this.crisisStatus);
    }
  }
};
