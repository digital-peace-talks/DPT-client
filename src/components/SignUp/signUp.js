import bip39 from "bip39";
export default {
  name: "signup",
  data: function() {
    return {
      /**
       * @type string
       */
      mnemonic: bip39.generateMnemonic(),
      copy: false,
      rcapt_sig_key: "6LdeFX8UAAAAAOSJ33QM34axntsJzUomy3RWI6--",
      rcapt_id: 0 // will be used later
    };
  },
  created(){
    this.$nextTick(function () {
    grecaptcha.render('recaptcha-main');
    })
  },
  mounted() {
    if (window.grecaptcha) {
      this.rcapt_id = grecaptcha.render( document.querySelector('.g-recaptcha')[0], { sitekey : this.rcapt_sig_key });
    }
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
