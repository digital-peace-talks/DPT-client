import bip39 from "bip39";
import { myLoginRoutine } from '../../mixins/mixins';
import ReCAPTCHA from '../ReCAPTCHA/ReCAPTCHA.vue';

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
            copy: false,
            recaptchaToken: null
        };
    },
    mounted() {
    },
    methods: {
        submitButtonClicked() {
            this.$refs.invisibleRecaptcha1.execute();
        },
        recaptchaCallback(recaptchaToken) {
            console.log(recaptchaToken)
            this.recaptchaToken = recaptchaToken
            if (this.recaptchaToken != null) {
                this.$router.push('/signin')
            }
        },
        removeToken() {
            this.recaptchaToken = null
        },
        signUp() {
            //secretKey=6Lej7IAUAAAAAMIF8rAvdGwPWnHemx9bDZiw8STC
            //myLoginRoutine({}).then(() => {
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
            this.copy = true;
        }
    }
};
