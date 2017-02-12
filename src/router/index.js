import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Login from 'components/Login'
import Show from 'components/Show'
import Register from 'components/Register'
import Member from 'components/Member'

Vue.use(Router)

export default new Router({
  // mode: history,
  routes: [
    { path: '/', component: Index, name: 'index' },
    { path: '/show/:id', component: Show, name: 'show' },
    { path: '/member/:id', component: Member, name: 'member' },
    // { path: '/test', component: Test, name: 'test' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 })
})

