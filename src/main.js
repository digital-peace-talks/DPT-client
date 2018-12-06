import Vue from 'vue'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.use (Vuetify)
Vue.use (VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
