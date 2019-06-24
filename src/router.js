import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/smooth-scroll',
      name: 'smooth-scroll',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/SmoothScroll.vue')
    },
    {
      path: '/context-menu',
      name: 'context-menu',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/ContextMenu.vue')
    },
    {
      path: '/show-hidden-el',
      name: 'show-hidden-el',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/ShowHiddenElement.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/Modal_Container.vue')
    },
    {
      path: '/confirmation-button',
      name: 'confirmation-button',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/ConfirmationButton.vue')
    }
  ]
})