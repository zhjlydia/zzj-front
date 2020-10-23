<!-- @format -->

<template>
  <div id="app" data-server-rendered="true">
    <router-view />
  </div>
</template>

<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>
<style lang="less">
/** @format */

body {
  margin: 0;
  padding: 0;
  background:#fff;
}
</style>
