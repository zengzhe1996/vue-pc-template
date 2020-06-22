import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册全局过滤器
import filters from '@/utils/filter'
console.log(filters)
for (const key in filters) {
  Vue.filter(key, filters[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
