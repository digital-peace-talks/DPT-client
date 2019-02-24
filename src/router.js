import Router from 'vue-router';
import Home from './components/Home/Home.vue';
import SignIn from './components/SignIn/SignIn.vue';
import SignUp from './components/SignUp/SignUp.vue';
import Chats from './components/Chat/Chats/Chats.vue';
import Chat from './components/Chat/Chat.vue';
import Crisis from './components/Crisis/Crisis.vue';

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
           {
             path: "/chat",
             name: "chats",
             component: Chats,
           },
           {
             path: '/chat/:id',
             name: 'Chat',
             component: Chat,
             props: true,
           },
           {
             path: '/crisis',
             name: 'Crisis',
             component: Crisis,
             props: true,
           }
          ],
  mode: "history"
});
