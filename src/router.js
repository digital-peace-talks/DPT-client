import Router from 'vue-router'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

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
        }
    ],
    mode: "history"
})


