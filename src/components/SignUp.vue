<template>
    <v-container>
        <h1 class="text-xs-center">Signup</h1>
        <v-form>
          <v-alert type="success" dismissible v-model="copy">
           Copied Passphrase successfully 
          </v-alert>

            <v-textarea outline
                id="mnemonic"
                label="PassPhrase"
                name="private-key"
                :value="mnemonic"
                ></v-textarea>
            <a href="'data:text/plain,'+encodeURIComponent(this.mnemonic)," id="download" class="btn success">Download Private Key</a> 
            <v-btn v-on:click="copyToClipboard" color="${1|success,error,warning,info|}">Copy Passphrase to clipboard</v-btn> 
            <v-btn to="/reCAPTCHA" color="${1|success,error,warning,info|}">Sign up</v-btn> 
        </v-form>
    </v-container>
</template>
<script>
import bip39 from "bip39"
export default {
  name: 'signup',
  data: function (){
        return {
            "mnemonic":bip39.generateMnemonic(),
            "copy":false,
            
        }
  },
  methods:{
  copyToClipboard:function() {
    document.querySelector("#mnemonic").select()
    document.execCommand('copy')
    this.copy = true
  }
  }
}

</script>
<style>

</style>
