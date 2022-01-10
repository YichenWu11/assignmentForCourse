import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
