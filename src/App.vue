<!-- @format -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>
<style lang="less">
/** @format */

body {
  font-family:SourceHanSerifCN-SemiBold,Microsoft YaHei,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  margin: 0;
  padding: 0;
  background:url('http://cdn.zhouzhoujiang.com/blog/bg.jpg') repeat;
}
</style>
