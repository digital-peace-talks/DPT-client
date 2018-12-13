import bip39 from 'bip39';

export default {
    name: "signin",
    data() {
        return {
            /**
             * @type string
             */
            mnemonic: null,
            rules: {
                validateMnemonic:(value) => {
                    const wordCount=value.trim().split(/\s+/).length
                    if(wordCount>12){
                        return "passphrase too long, must be 12 words"
                    }
                    if(wordCount<12){
                        return "passphrase too short, must be 12 words"
                    }
                    if(!bip39.validateMnemonic(value)){
                        return "passphrase doesn't match"
                    }
                    return true
                } 
            }
        }
    },
    methods: {
        login(){
            console.log(this.mnemonic)
        },
        /**
         * Sets this.key according to clipboard text
         */
        pasteFromClipboard() {
            navigator.clipboard.readText().then(text => (this.mnemonic = text));
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
                    this.mnemonic = reader.result;
                };
                reader.readAsText(files[0]);
            }
        }
    }
};
