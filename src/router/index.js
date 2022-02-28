import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Registration from '@/views/Registration'
import Home from '@/views/Home'
import Cookies from 'js-cookie'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

// navigation guards
router.beforeEach((to, from, next) => {
  let token = Cookies.get('token')
  if (token || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router
