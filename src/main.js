import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from "./router.js";
import "materialize-css/dist/js/materialize.min"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
