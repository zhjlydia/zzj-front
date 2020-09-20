<!-- @format -->

<template>
  <div class="navBar">
    <div class="logo-wrap">
      <img class="logo" src="http://cdn.zhouzhoujiang.com/blog/logo4.png" @click="home" />
    </div>
    <div class="menu">
      <div class="menu-item" :class="{active: item.path === activeMenu}" v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop} from 'vue-property-decorator'
import {constantRoutes} from '@/router/routers'

@Component
export default class NavBar extends Vue {
  routes: any = [
    {
      path: '/article/list',
      title: 'articles'
    },
    {
      path: '/repository/index',
      title: 'repositories'
    }
  ]
  get activeMenu() {
    const route = this.$route
    const {meta, path} = route
    return path
  }
  home() {
    this.$router.replace({
      name: 'Home'
    })
  }
}
</script>
<style lang="less" scoped>
/** @format */

.navBar {
  padding: 10px 0 0 0;
  font-size: 26px;
  overflow: hidden;
  z-index: 10;
  background: #f5f5f5;
  text-align: center;
  color: #333;
  .logo {
    width: 300px;
    height: auto;
    cursor: pointer;
  }
  .menu-item {
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    display: inline-block;
    padding: 0 20px;
    vertical-align: top;
    position: relative;
    font-weight: bold;
    a {
      color: #333;
      position: relative;
      z-index: 1;
    }
    &.active:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      height: 6px;
      background: #ffe082;
      left: 5px;
      right: 5px;
      bottom: 5px;
      z-index: 0;
      border-radius: 3px;
    }
  }
}
</style>
