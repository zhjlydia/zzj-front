<!-- @format -->

<template>
  <div class="navBar">
    <div class="bar">
        <div class="logo">周周酱记事本</div>
        <div class="menu">
          <div
            class="menu-item"
            :class="{'active':item.path===activeMenu}"
            v-for="(item,index) in routes"
            :key="index"
          >
            <router-link :to="item.path">{{item.title}}</router-link>
          </div>
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
      title: '博文'
    },
    {
      path: '/repository/index',
      title: '仓库'
    }
  ]
  get activeMenu() {
    const route = this.$route
    const {meta, path} = route
    return path
  }
}
</script>
<style lang="less" scoped>
/** @format */

.navBar {
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0 200px;
  min-width: 1220px;
  font-size: 26px;
  height: 60px;
  background:#fff;
  line-height: 60px;
  text-align: center;
  color: #333;
  box-shadow: 0 1px 5px rgba(0,0,0,.1);
  .logo {
    margin-right: 40px;
  }
  .bar {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-item {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    display: inline-block;
    padding:0 20px;
    vertical-align: top;
    position:relative;
    a {
      color: #333;
    }
    &.active:before{
      content:'';
      box-sizing: border-box;
      position:absolute;
      height:10px;
      border-top:2px solid #feba34;
      border-bottom:2px solid #feba34;
      left:5px;
      right:5px;
      bottom:0;
    }
  }
}
</style>
