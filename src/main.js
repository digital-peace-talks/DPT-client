import Vue from 'vue';
import './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase';
import {store} from './Store';


Vue.config.productionTip = false;
Vue.use (Vuetify);
Vue.use (VueRouter);
window.app = new Vue();

new Vue({
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAw0V5QUQKO27W9Fx16_YSbeqBdJ3f41hM",
      authDomain: "digital-peace-talks-c6698.firebaseapp.com",
      databaseURL: "https://digital-peace-talks-c6698.firebaseio.com",
      projectId: "digital-peace-talks-c6698",
      storageBucket: "digital-peace-talks-c6698.appspot.com",
      messagingSenderId: "1087669482589"
    })},
  render: h => h(App),
  router,
  store
}).$mount('#app');
