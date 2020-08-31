<!-- @format -->

<template>
  <div>
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

.banner{
  width:100%;
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:url('http://cdn.zhouzhoujiang.com/blog/home-banner.jpg');
  border-radius: 0 0 40% 40%; 
  filter:blur(3px)
}
</style>