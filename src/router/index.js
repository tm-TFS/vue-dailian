import Vue from 'vue'
import Router from 'vue-router'
import api from '../fetch/api';

//home
import Index from '@/page/home/index'
import orderList from '@/page/order/orderList'
import publish from '@/page/publish/index'
import mine from '@/page/mine/index'
import goodsList from '@/page/goods/list'
import login from '@/page/login/login'
import specialSearch from '@/page/search/searchSpecial'
import specialDetail from '@/page/search/specialDetail'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/specialSearch'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'order',
      component: orderList
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/specialSearch',
      name: 'specialSearch',
      component: specialSearch
    },
    {
      path: '/specialDetail/:id',
      name: 'specialDetail',
      component: specialDetail
    },
  ]
});

router.beforeEach((to, from, next) => {
  //如果路由中设置了meta.requiresAuth 即 需要token验证 ， 若token 不存在 则重定向至 登录界面
  if (to.matched.some(record => record.meta.requiresAuth) && !api.getCookie('token')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next() // 确保一定要调用 next()
  }
});

export default router;
