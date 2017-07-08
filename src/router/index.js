import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Itondo from '@/components/Itondo'
import Mirage from '@/components/Mirage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/itondo',
      name: 'Itondo',
      component: Itondo
    },
    {
      path: '/mirage',
      name: 'Mirage',
      component: Mirage
    }
  ]
})
