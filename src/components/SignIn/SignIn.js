import Cookies from "js-cookie";
export default {
  name: "signin",
  data() {
    return {
      /**
       * @type string
       */
      key: null
    };
  },
  methods: {
    /**
     * Sets this.key according to clipboard text
     */
    pasteFromClipboard() {
      navigator.clipboard.readText().then(text => (this.key = text));
    },
    loadFile() {
      this.$refs.fileInput.click();
    },
    /**
     * Executed after the user has selected a file
     * @param {Event} evt
     */
    onFilePicked() {
      /**
       * @type FileList
       */
      const files = this.$refs.fileInput.files;
      if (files[0] !== undefined) {
        let reader = new FileReader();
        reader.onload = () => {
          this.key = reader.result;
        };
        reader.readAsText(files[0]);
      }
    }
  }
};
