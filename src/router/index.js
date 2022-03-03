import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Registration from '@/views/Registration'
import Home from '@/views/Home'
import store from '../store'
import Layout from '@/layout'

Vue.use(Router)

export const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
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
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [{
        path: 'home',
        name: 'Home',
        component: Home
      }]
    }
  ]
})

// navigation guards
router.beforeEach((to, from, next) => {
  let token = store.getters.getToken
  console.log(token)
  if (token || to.path === '/login') {
    next()
  } else {
    next('/login')
    console.log('aa')
  }
})

export function resetRouter () {
  const newRouter = router
  router.matcher = newRouter.matcher // reset router
}

export default router
