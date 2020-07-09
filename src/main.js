import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
import VueFullPage from 'vue-fullpage.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'fullpage.js/vendors/scrolloverflow'
import router from './router'
import { get, post } from './utils/request'
import 'ant-design-vue/dist/antd.css'
Vue.use(ElementUI)
Vue.use(Antd)
Vue.use(VueFullPage)
Vue.prototype.get = get
Vue.prototype.post = post
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
