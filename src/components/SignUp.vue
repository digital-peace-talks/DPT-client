<template>
  <v-container>
    <v-layout column mt-5>
      <h1 class="headline mb-3">Your randomly generated private key is:</h1>
      <v-snackbar v-model="copy">Private key successfully copied to clipboard!
        <v-btn flat color="warning" @click.native="copy = false">Close</v-btn>
      </v-snackbar>
      <v-form>
        <v-textarea outline id="mnemonic" label="PassPhrase" name="private-key" :value="mnemonic"></v-textarea>
        <v-layout row wrap>
          <v-checkbox
            label="Remember me (browser cookie)"
            v-model="value"
            value="value"
            class="left ma-0 pa-0"
          ></v-checkbox>
          <v-btn @click="copyToClipboard" color="success" class="right">Copy to clipboard</v-btn>
          <v-btn
            color="secondary"
            class="right"
            @click="download('private_key.txt', mnemonic)"
          >Download
            <v-icon right dark>save_alt</v-icon>
          </v-btn>
        </v-layout>
        <v-layout column align-center>
          <v-flex xs12 sm12 md12>
            <v-btn to="/reCAPTCHA" class="px-5 my-5" color="primary">Sign up</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-layout>
  </v-container>
</template>
<script>
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
</script>
<style>
</style>
