import CrisisControls from "./CrisisControls/CrisisControls.vue";
import CrisisResolved from "./CrisisResolved/CrisisResolved.vue";
import CrisisStart from "./CrisisStart/CrisisStart.vue";
import CrisisNotice from "./CrisisNotice/CrisisNotice.vue";
import { VChip } from "vuetify/lib";

export default {
  data: () => ({
    show: false,
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
  props: {
    chatID: String
  },
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
      this.crisisStatus = 1;
    }
  }
};
