/** @format */

import Layout from '@/layout/index.vue'

import {RouteConfig} from 'vue-router'
/** 固定路由 无权限控制 */
export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    name: 'Home',
    meta: {
      title: '首页'
    }
  }
  // {
  //   path: '/article',
  //   component: Layout,
  //   redirect: '/article/list',
  //   name: 'Article',
  //   meta: {
  //     title: '笔记'
  //   },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'ArticleList',
  //       meta: {
  //         title: '笔记列表'
  //       },
  //       // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  //       component: () => import(/* webpackChunkName: "articleList" */ '@/views/article/list.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/article/detail',
  //   name: 'ArticleDetail',
  //   meta: {
  //     hidden: true,
  //     title: '笔记详情'
  //   },
  //   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  //   component: () => import(/* webpackChunkName: "articleDetail" */ '@/views/article/detail.vue')
  // },
  // {
  //   path: '/project',
  //   component: Layout,
  //   redirect: '/project/index',
  //   name: 'Project',
  //   meta: {
  //     title: '仓库'
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ProjectIndex',
  //       meta: {
  //         title: '笔记列表'
  //       },
  //       // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  //       component: () => import(/* webpackChunkName: "repository" */ '@/views/project/index.vue')
  //     }
  //   ]
  // }
]
