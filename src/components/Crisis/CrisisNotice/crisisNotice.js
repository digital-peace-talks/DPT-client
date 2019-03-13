import { VDialog, VSwitch } from "vuetify/lib";

export default {
  data() {
    return {
      solvedMe: true,
      solvedYou: true
    };
  },
  components: { VDialog, VSwitch },
  props: {
    on: Object,
    state: Number
  }
};
