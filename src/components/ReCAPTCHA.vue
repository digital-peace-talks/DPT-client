
<template>
    <v-container>
      <div id="recaptcha-main" class="g-recaptcha" :data-sitekey="rcapt_sig_key"></div>
    </v-container>
</template>
<script>
import bip39 from "bip39"
export default {
  name: 'signup',
  data() {
      return {
        rcapt_sig_key: "6LdeFX8UAAAAAOSJ33QM34axntsJzUomy3RWI6--",
        rcapt_id: 0 // will be used later
      }
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
  }
}

</script>
<style>

</style>
