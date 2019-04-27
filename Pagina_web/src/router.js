import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( './views/Home.vue')
    },
    {
      path: '/comentarios',
      name: 'comentarios',
      component: () => import( './views/comentarios.vue')
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import('./views/About.vue')
    },
    {
      path: '/Contactenos',
      name: 'Contactenos',
     
      component: () => import('./views/contactenos.vue')
    },
    {
      path: '/admin',
      name: 'admi',
     
      component: () => import('./views/admin.vue')
    },
    {
      path: '/dip1',
      name: 'dip1',
      component: () => import('./components/CrsItem1.vue')
    },
    {
      path: '/dip2',
      name: 'dip2',
      component: () => import('./components/CrsItem2.vue')
    },
    {
      path: '/dip3',
      name: 'dip3',
      component: () => import('./components/CrsItem3.vue')
    },
    {
      path: '/dip4',
      name: 'dip4',
      component: () => import('./components/CrsItem4.vue')
    },

  ]
})
