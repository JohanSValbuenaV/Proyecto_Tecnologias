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
    }
  ]
})
