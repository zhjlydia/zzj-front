/** @format */

import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from '@/store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
import * as directives from '@/directives'
import {DirectiveOptions} from 'vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as {[key: string]: DirectiveOptions})[key])
})

export function createApp () {
  const router = createRouter()
  const store = createStore()
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}