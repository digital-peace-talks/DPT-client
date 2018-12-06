import Vue from "vue"
import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
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
        path:"/login",
        name:"login",
        component:Login,
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
    ]
})


