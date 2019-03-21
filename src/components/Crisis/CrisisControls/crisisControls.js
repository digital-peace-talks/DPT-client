import { VSwitch } from "vuetify/lib";

export default {
  data() {
    return {
      solvedYou: false
    };
  },
  props: {
    on: Object,
    state: Number,
    solvedThem: Boolean
  },
  components: { VSwitch },
  methods: {
    handleSwitch: function() {
      this.$emit("solvedYouChange", this.solvedYou);
    }
  }
};
