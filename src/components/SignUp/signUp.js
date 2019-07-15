import bip39 from "bip39";
import ReCAPTCHA from '../ReCAPTCHA/ReCAPTCHA.vue';
import AuthMixin from "../../mixins/auth.mixin";

export default {
    name: "signup",
    components: {
        'ReCAPTCHA': ReCAPTCHA,
    },
    data: function () {
        return {
            /**
             * @type string
             */
            mnemonic: bip39.generateMnemonic(),
            showCopiedMessage: false,
            shouldRememberMnemonic: false,
        };
    },
    mixins: [AuthMixin],
    methods: {
        /**
         * Executes sign up
         */
        signUpSubmitted() {
            if (this.shouldRememberMnemonic) {
                this.saveMnemonic(this.mnemonic);
            }

            // disable recaptcha for now, re-enable it, when needed             
            if(0) {
               this.$refs.recaptcha.execute();
            } else {
                this.$router.push("/signin");
            }
        },
        recaptchaCallback(recaptchaToken) {
            if (recaptchaToken != null) {
                this.signUp(recaptchaToken).then(() => this.$router.push("/signin"));
            }
        },
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
            this.showCopiedMessage = true;
        }
    }
};
