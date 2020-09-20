<!-- @format -->

<template>
  <div class="app-main">
    <transition name="main" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class AppMain extends Vue {}
</script>
<style lang="less" scoped>
/** @format */
.app-main {
  background: #f5f5f5;
  padding: 0 0 20px 0;
}
</style>
