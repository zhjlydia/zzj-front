<!-- @format -->

<template>
  <div class="navBar">
    <div class="bar">
      <div class="flex">
        <div class="logo">周周酱记事本</div>
        <div class="menu">
          <div
            class="menu-item"
            v-for="(item,index) in routes"
            :key="index"
          >
            <router-link :to="item.path">{{item.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop} from 'vue-property-decorator'
import {constantRoutes} from '@/router/routers'
import navItem from '@/layout/components/navbar/nav-item.vue'

@Component({components: {navItem}})
export default class NavBar extends Vue {
  routes: any = [
    {
      path: '/article/list',
      title: '博文'
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

  line-height: 60px;
  text-align: center;
  color: #435c70;
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
    font-size: 20px;
    a {
      color: #435c70;
    }
  }
}
</style>
