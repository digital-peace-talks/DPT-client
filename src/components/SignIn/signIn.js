import bip39 from 'bip39';

export default {
    name: "signin",
    data() {
        return {
            /**
             * @type string
             */
            key: null,
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
                } 
            }
        }
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
