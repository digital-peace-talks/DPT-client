import { VDialog } from "vuetify/lib";

export default {
  components: { VDialog },
  props: {
    showDialog: Boolean,
    reason: String
  },
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {}
    }
  }
};
