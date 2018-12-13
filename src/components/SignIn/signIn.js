import bip39 from 'bip39';
import ReCAPTCHA from '../ReCAPTCHA/ReCAPTCHA.vue';
import AuthMixin from '../../mixins/auth.mixin';

export default {
    name: "signin",
    components: {
        'ReCAPTCHA': ReCAPTCHA,
    },
    mixins: [AuthMixin],
    data() {
        return {
            /**
             * @type string
             */
            mnemonic: this.loadMnemonic(),
            rules: {
                validateMnemonic(value) {
                    if (value != null) {
                        const wordCount = value.trim().split(/\s+/).length;
                        if (wordCount > 12) {
                            return "passphrase too long, must be 12 words";
                        }
                        if (wordCount < 12) {
                            return "passphrase too short, must be 12 words";
                        }
                        if (!bip39.validateMnemonic(value)) {
                            return "passphrase doesn't match";
                        }
                    }
                    return true;
                }
            },
            shouldRememberMnemonic: false
        };
    },
    methods: {
        /**
         * Sets this.key according to clipboard text
         */
        pasteFromClipboard() {
            navigator.clipboard.readText().then(text => (this.mnemonic = text));
        },
        signInSubmitted() {
            if (this.shouldRememberMnemonic) {
                this.saveMnemonic(this.mnemonic);
            }
            this.$refs.recaptcha.execute();
        },
        recaptchaCallback(recaptchaToken) {
            if (recaptchaToken != null) {
                this.signIn(recaptchaToken).then(() => null);
            }
        },
        /**
         * Opens the file dialog for the user to pick the mnemonic file
         */
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
                    this.mnemonic = reader.result;
                };
                reader.readAsText(files[0]);
            }
        }
        
    }
};
