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
  computed: {
    crisisStatus: function() {
      return this.crisisENUM.PENDING;
    }
  },
  components: {
    crisisControls: CrisisControls,
    crisisNotice: CrisisNotice
  },
  methods: {
    time_range(val) {
      return val > 23 ? val - 23 : val;
    }
  }
};
