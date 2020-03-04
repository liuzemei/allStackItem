import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import APIS from './api'

Vue.config.productionTip = false
Vue.prototype.APIS = APIS

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
