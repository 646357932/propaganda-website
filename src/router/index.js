import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import freeTry from '@/views/components/freeTry'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/freeTry',
      name: 'freeTry',
      component: freeTry
    }
  ]
})
