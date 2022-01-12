import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { Carousel, CarouselItem } from 'element-ui'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);

new Vue({
  render: h => h(App),
  mounted() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
