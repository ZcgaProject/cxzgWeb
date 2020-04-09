import Vue from 'vue'
import Router from 'vue-router'
import IntegrityPage from '@/pages/integrityChina/integrityPage'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认主页面
    {
      path: '/',
      redirect: 'integrityPage'
    },
    {
      path: '/integrityPage',
      name: 'IntegrityPage',
      component: IntegrityPage
    }
  ]
})
