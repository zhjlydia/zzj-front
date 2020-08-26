/** @format */

import Layout from '@/layout/index.vue'

import {RouteConfig} from 'vue-router'
/** 固定路由 无权限控制 */
export const constantRoutes : RouteConfig[] = [
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'Article',
    meta: {
      title: '笔记',
      icon: 'document'
    },
    children: [
      {
        path: 'list',
        name: 'ArticleList',
        meta: {
          title: '笔记列表'
        },
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        component: () => import (/* webpackChunkName: "articleList" */
        '@/views/article/list.vue')
      }, {
        path: 'detail',
        name: 'ArticleDetail',
        meta: {
          hidden: true,
          title: '笔记详情'
        },
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        component: () => import (/* webpackChunkName: "articleDetail" */
        '@/views/article/detail.vue')
      }
    ]
  }
]
