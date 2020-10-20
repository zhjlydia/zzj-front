<!-- @format -->

<template>
  <div
    class="tag"
    :style="styles"
  >
    <slot />
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

@Component
export default class ListItem extends Vue {
  @Prop()
  color: string

  get styles() {
    return {
      backgroundColor: this.color
    }
  }
}
</script>
<style lang="less" scoped>
/** @format */

.tag {
  font-size: 12px;
  padding: 0 10px;
  border-radius: 10px;
  margin-right: 5px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  color: #000;
  display: inline-block;
}
@media (max-width: 650px) {
  .tag {
    height: 16px;
    line-height: 16px;
    font-size: 10px;
  }
}
</style>
