import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from '../../store/index2'
import {globalStore} from '../../store/mixin'
import * as http from '../../common/service/services'
Vue.config.productionTip = false

import VConsole from 'vconsole'

// es兼容
import 'babel-polyfill'

// 适配js
import 'lib-flexible'

// 样式重置
import '../../common/css/reset.scss'

// 导入字体图标
import '../../common/font/iconfont.css'
if (window.location.href.indexOf('vconsole') !== -1) {
  new VConsole()
}
// 全局混入全局状态
Vue.mixin(globalStore)
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
