import { VSwitch } from "vuetify/lib";

export default {
  data() {
    return {
      show: false,
      solvedYou: false,
      solvedThem: false
    };
  },
  props: {
    on: Object,
    state: Number,
    show: Boolean
  },
  components: { VSwitch }
};
