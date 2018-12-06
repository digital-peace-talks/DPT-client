<template>
  <v-container>
    <v-layout column mt-5>
      <h1 class="headline mb-3">Enter your private key</h1>
      <v-form>
        <input type="file" style="display:none" ref="fileInput" @change="onFilePicked">
        <v-textarea outline label="Private Key" name="private-key" v-model="key"></v-textarea>
        <v-layout row wrap>
          <v-checkbox label="Remember me (browser cookie)" class="left ma-0 pa-0"></v-checkbox>
          <v-btn @click="loadFile" color="success" class="right">Load File
            <v-icon right>folder_open</v-icon>
          </v-btn>
          <v-btn @click="pasteFromClipboard" color="secondary" class="right">Paste from clipboard</v-btn>
        </v-layout>
        <v-layout column align-center>
          <v-flex xs12 sm12 md12>
            <v-btn to="/reCAPTCHA" class="px-5 my-5" color="primary">Sign In</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-layout>
  </v-container>
</template>
<script>
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
</script>
<style>
</style>
