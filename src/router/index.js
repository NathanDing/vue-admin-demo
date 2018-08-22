import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
import iView from 'iview'
// import store from '@/store'

Vue.use(Router)
Vue.use(iView)

// 声明路由
const router = new Router({
  routes: routers, // 同目录下的routers.js
  mode: 'history'
})

// 声明登录页面
const LOGIN_PAGE_NAME = 'main'

// vue-router的全局钩子beforeEach，打开加载进度条
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 暂时为‘’,真实环境需要通过服务端的api请求获取token值
  const token = ''
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    console.log('未登录且要跳转的页面不是登录页')
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    console.log('未登陆且要跳转的页面是登录页')
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    console.log('已登录且要跳转的页面是登录页')
    next() // 一般不会这么干吧********************************************************************************************
  } else {
    console.log('已登录，暂时不做权限判断,爱跳哪跳哪')
    next()
    // store.dispatch('getUserInfo').then(user => {
    //   // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
    //   if (canTurnTo(to.name, user.access, routers)) next() // 有权限，可访问
    //   else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
    // })
  }
})

// vue-router的全局钩子afterEach，关闭加载进度条
router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

// export default
export default router
