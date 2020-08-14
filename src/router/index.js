import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Card = ()=>import('views/card/Card')
const Profile = ()=>import('views/profile/Profile')
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/card',
      component: Card,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '我的'
      }
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
