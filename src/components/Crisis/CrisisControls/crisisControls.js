import { VSwitch } from "vuetify/lib";

export default {
  data() {
    return {
      solvedMe: true,
      solvedYou: true
    };
  },
  components: { VSwitch },
  props: {
    on: Object,
    state: Number
  }
};
