<!-- @format -->

<template>
  <div
    class="list-item"
    @click="detail(item.id)"
  >
    <div class="item-main">
      <p class="title">{{ item.title }}</p>
      <tag
        v-for="(item, index) in item.tags"
        :key="index"
        :color="getColor(index)"
      >{{ item.content }}</tag>
      <div class="description">{{ item.description }}</div>
      <div class="time"><i class="el-icon-time mar-r-10"></i>{{ item.createdAt }}</div>
    </div>
    <div class="image-wrap">
      <el-image
        v-if="item.image"
        class="image"
        :src="item.image"
        fit="cover"
      ></el-image>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
import {COLOR_ARRAY} from '@/common/constant'
import Tag from '@/components/tag.vue'
import Article from '@/model/article'

@Component({components: {Tag}})
export default class ListItem extends Vue {
  @Prop()
  item: Article

  getColor(index: number) {
    return COLOR_ARRAY[index % COLOR_ARRAY.length]
  }

  @Emit()
  detail(id) {
    return id
  }
}
</script>
<style lang="less" scoped>
/** @format */
.list-item {
  color: #333;
  font-size: 14px;
  background: #fff;
  display: flex;
  cursor: pointer;
  .item-main {
    padding: 10px;
    flex: 1 0;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #666;
  }
  .description {
    margin: 15px 0;
    color: #757575;
    line-height: 1.5;
    height: 45px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .time {
    font-size: 10px;
    font-weight: bold;
  }
  .category {
    margin-top: 10px;
  }
  .image-wrap {
    flex: 0 0 25%;
    width: 25%;
    height: 50%;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    padding: 10px;
  }
  .image {
    text-align: center;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 650px) {
  .list-item {
    align-items: center;
    .title {
      margin-bottom: 10px;
    }
    .image-wrap {
      padding: 5px;
    }
    .description {
      margin: 10px 0;
    }
  }
}
</style>
