import Router from 'vue-router';
import Home from './components/Home/Home.vue';
import SignIn from './components/SignIn/SignIn.vue';
import SignUp from './components/SignUp/SignUp.vue';

export default new Router({
    routes: [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/signin",
        name: "signin",
        component: SignIn,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp,
    },
    ],
    mode: "history"
});
