import Login from '@/pages/login/login'
import Main from '@/pages/main/main'
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: Login
  },
  {
    path: '/',
    name: 'main',
    component: Main
  }
]
