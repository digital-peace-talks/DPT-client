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

new Vue({
  render: h => h(App),
  router,
  store,
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAw0V5QUQKO27W9Fx16_YSbeqBdJ3f41hM",
      authDomain: "digital-peace-talks-c6698.firebaseapp.com",
      databaseURL: "https://digital-peace-talks-c6698.firebaseio.com",
      projectId: "digital-peace-talks-c6698",
      storageBucket: ""
      //messagingSenderId: "1087669482589"
    })}
}).$mount('#app');
