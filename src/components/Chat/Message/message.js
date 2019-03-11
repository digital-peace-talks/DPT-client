//import Image from './Image.vue'
export default {
  data() {
    return {};
  },
  props: ["messages"],
  components: {
    //'chat-image': Image
  },
  computed: {
    username() {
      return "alice"; //this.$store.getters.user.username
    }
  },
  methods: {
    imageLoad() {
      // this.$emit('imageLoad')
    }
  }
};
