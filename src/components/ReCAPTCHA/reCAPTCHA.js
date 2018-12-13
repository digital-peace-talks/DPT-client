export default {
    name: 'ReCAPTCHA',
    props: {
        sitekey: {
            type: String,
            required: true
        },
        elementId: {
            type: String,
            required: true
        },
        showBadgeMobile: {
            type: Boolean,
            default: true
        },
        showBadgeDesktop: {
            type: Boolean,
            default: true
        },
        badgePosition: {
            type: String
        }
    },
    data () {
        return {
            gAssignedId: null,
            captchaReady: false,
            checkInterval: null,
            checkIntervalRunCount: 0
        }
    },
    computed: {
        styleClassObject: function () {
            return {
                'g-recaptcha--left': (this.badgePosition === 'left'),
                'g-recaptcha--mobile-hidden': (!this.showBadgeMobile),
                'g-recaptcha--desktop-hidden': (!this.showBadgeDesktop)
            }
        }
    },
    methods: {
        execute () {
            window.grecaptcha.execute(this.gAssignedId)
        },
        reset () {
            window.grecaptcha.reset(this.gAssignedId)
        },
        callback (recaptchaToken) {
            // Emit an event called recaptchaCallback with the recaptchaToken as payload
            this.$emit('recaptcha-callback', recaptchaToken)
            // Reset the recaptcha widget so you can execute it again
            this.reset()
        },
        render () {
            this.gAssignedId = window.grecaptcha.render(this.elementId, {
                sitekey: this.sitekey,
                size: 'invisible',
                // the callback executed when the user solve the recaptcha
                'callback': (recaptchaToken) => {
                    this.callback(recaptchaToken)
                },
                'expired-callback': () => {
                    this.reset()
                }
            })
        },
        init() {
            // render the recaptcha widget when the component is mounted
            // we'll watch the captchaReady value in order to
            this.checkInterval = setInterval(() => {
                this.checkIntervalRunCount++
                if (window.grecaptcha && window.grecaptcha.hasOwnProperty('render')){
                    this.captchaReady = true
                }
            }, 1000)
        }
    },
    watch: {
        captchaReady: function(data) {
            if (data) {
                clearInterval(this.checkInterval)
                this.render()
            }
        }
    },
    mounted () {
        // Initialize the recaptcha
        this.init()
    }
}
