<!-- @format -->

<template>
  <div class="home">
    <div class="banner">
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import {Loading, Catch} from '@/plugins/decorators'

@Component
export default class Home extends Vue {

 
}
</script>

<style lang="less" scoped>
/** @format */
.home{
  width:100%;
  overflow:hidden;
  .banner{
  width:140%;
  height: 100vh;
  position:fixed;
  left:-20%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:url('http://cdn.zhouzhoujiang.com/blog/home-banner.jpeg');
  border-radius: 0 0 50% 50%;
}
}

</style>