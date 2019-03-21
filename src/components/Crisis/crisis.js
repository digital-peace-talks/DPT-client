import CrisisControls from "./CrisisControls/CrisisControls.vue";
import CrisisResolved from "./CrisisResolved/CrisisResolved.vue";
import CrisisStart from "./CrisisStart/CrisisStart.vue";
import CrisisNotice from "./CrisisNotice/CrisisNotice.vue";
import { VChip } from "vuetify/lib";

export default {
  data: () => ({
    show: false,
    solvedThem: true,
    solvedYou: false,
    resolvedCounter: 1,
    crisisENUM: Object.freeze({
      NOT_STARTED: 0,
      PENDING: 1,
      ONGOING: 2,
      RESOLVED: 3,
      FAILURE: 4
    }),
    crisisStatus: 0,
    reason: ""
  }),
  components: {
    crisisControls: CrisisControls,
    crisisStart: CrisisStart,
    crisisResolved: CrisisResolved,
    crisisNotice: CrisisNotice,
    VChip
  },
  methods: {
    handleCrisisStart(value) {
      this.$store.dispatch("addCrisis", {
        initiator: "Iwan",
        recipient: "Bob",
        reason: value.reason,
        due: value.due,
        status: 1,
        date: new Date().toString(),
        chatID: this.$route.params.id
      });
      this.reason = value.reason;
    },
    handleAdvanceCrisis() {
      this.crisisStatus += 1;
    },
    handleSolvedYouChange(value) {
      this.solvedYou = value;
      if (this.solvedYou && this.solvedThem) {
        this.crisisStatus = this.crisisENUM.RESOLVED;
        this.resolvedCounter += 1;
        this.crisisStatus = this.crisisENUM.NOT_STARTED;
        return true;
      } else {
        return false;
      }
    }
  }
};
