import Router from 'vue-router'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ReCAPTCHA from './components/ReCAPTCHA'

export default new Router ({
    routes: [
        {
        path:"/",
        name:"home",
        component:Home,
        },
        {
        path:"/signin",
        name:"signin",
        component:SignIn,
        },
        {
        path:"/signup",
        name:"signup",
        component:SignUp,
        },
        {
        path:"/reCAPTCHA",
        name:"reCAPTCHA",
        component:ReCAPTCHA,
        },
    ],
    mode: "history"
})


