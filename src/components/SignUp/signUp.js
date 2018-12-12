import bip39 from "bip39";
export default {
  name: "signup",
  data: function() {
    return {
      /**
       * @type string
       */
      mnemonic: bip39.generateMnemonic(),
      copy: false
    };
  },
  methods: {
    /**
     * Downloads a file
     * @param {string} filename the designated filename (e.g. key.txt)
     * @param {string} text the content of the file
     */
    download(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    copyToClipboard() {
      document.querySelector("#mnemonic").select();
      document.execCommand("copy");
      this.copy = true;
    }
  }
};