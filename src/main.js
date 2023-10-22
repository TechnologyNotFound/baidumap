import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/axios'
import vuescroll from 'vuescroll'
import * as echarts from 'echarts';

Vue.config.productionTip = false
Vue.use(vuescroll);
Vue.use(echarts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


