const crisisENUM = {
  NOT_STARTED: 0,
  PENDING: 1,
  ONGOING: 2,
  RESOLVED: 3,
  FAILURE: 4
};
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
    crisisStatus: crisisENUM.NOT_STARTED
  }),
  computed: {},
  methods: {
    time_range(val) {
      return val > 23 ? val - 23 : val;
    }
  }
};
