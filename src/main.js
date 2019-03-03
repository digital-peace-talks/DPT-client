import Vue from "vue";
import "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./Store";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);
window.app = new Vue();

new Vue({
  created() {},
  render: h => h(App),
  router,
  store
}).$mount("#app");
