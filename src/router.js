import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'

export const router=new Router ({
    routes:[
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
        //{
        //path:"/signup",
        //name:"signup",
        //component:SignUp,
        //},
    ]
})


