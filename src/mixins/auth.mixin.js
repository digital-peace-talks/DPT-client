import Cookies from "js-cookie";

const mnemonicCookie = "mnemonic";

export default {
  data() {
    return {
      recaptchaSiteKey: "6Lej7IAUAAAAAPNCjArbGo2M77bzOQ2IP9t-e3Ma"
    };
  },
  methods: {
    /**
     * Performs sign in
     * @param {string} recaptchaToken the recaptcha response
     * @returns {Promise}
     */
    signIn(recaptchaToken) {
      return new Promise(resolve => {
        // eslint-disable-next-line no-console
        console.info(
          "just a placeholder for now; recaptcha: " + recaptchaToken
        );
        resolve();
      });
    },
    /**
     * Performs sign up
     * @param {string} recaptchaToken the recaptcha response
     * @returns {Promise}
     */
    signUp(recaptchaToken) {
      return new Promise(resolve => {
        // eslint-disable-next-line no-console
        console.info(
          "just a placeholder for now; recaptcha: " + recaptchaToken
        );
        resolve();
      });
    },
    /**
     * Sets a cookie containing the mnemonic
     * @param {string} mnemonic mnemonic from sign in/sign up
     */
    saveMnemonic(mnemonic) {
      Cookies.set(mnemonicCookie, mnemonic);
    },
    /**
     * Loads an mnemonic from a cookie
     * @returns {string} the mnemonic value
     */
    loadMnemonic() {
      return Cookies.get(mnemonicCookie);
    },
    /**
     * Deletes Mnemonic cookie
     */
    deleteMnemonic() {
      Cookies.remove(mnemonicCookie);
    }
  }
};
