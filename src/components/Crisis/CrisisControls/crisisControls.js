import { VSwitch, VChip, VFlex, VCard, VSpacer } from "vuetify/lib";

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
  components: { VSwitch, VChip, VFlex, VCard, VSpacer },
  methods: {
    handleSwitch: function() {
      this.$emit("solvedYouChange", this.solvedYou);
    }
  }
};
