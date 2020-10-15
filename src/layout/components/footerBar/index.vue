<!-- @format -->

<template>
  <div class="footer">
    <div class="copyright">
      ©2020 Zhou Zhou. All rights reserved.
      <p class="record">浙ICP备20029169号</p>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class FooterBar extends Vue {}
</script>
<style lang="less" scoped>
/** @format */

.copyright {
  text-align: center;
  font-size: 16px;
  padding: 20px 0;
  background: #f5f5f5;
  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.06);
  .record {
    margin-top: 10px;
  }
}
@media (max-width: 650px) {
  .copyright {
    font-size: 12px;
    padding: 10px 0;
  }
}
</style>
