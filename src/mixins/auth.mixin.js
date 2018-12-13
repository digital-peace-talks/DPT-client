import Cookies from 'js-cookie';

const mnemonicCookie = 'mnemonic';

export default {
    methods: {
        /**
         * Performs sign in
         * @param {string} recaptchaToken the recaptcha response
         */
        signIn(recaptchaToken) {
            console.info('just a placeholder for now; recaptcha: ' + recaptchaToken);
        },
        /**
         * Performs sign up
         * @param {string} recaptchaToken the recaptcha response
         */
        signUp(recaptchaToken) {
            console.info('just a placeholder for now; recaptcha: ' + recaptchaToken);
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
