<!-- @format -->

<template>
  <div class="home-article clearfix">
    <div class="home-article-item-wrap" v-for="(item, index) in items" :key="index" @click="detail(item.id)">
      <div class="home-article-item">
        <div class="image-wrap">
          <el-image v-if="item.image" class="image" :src="item.image" fit="cover"></el-image>
        </div>
        <div class="item-main">
          <p class="title">{{ item.title }}</p>
          <tag v-for="(item, index) in item.tags" :key="index" :color="getColor(index)">{{ item.content }}</tag>
          <div class="description">{{ item.description }}</div>
          <div class="time"><i class="el-icon-time mar-r-10"></i>{{ item.createdAt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {COLOR_ARRAY} from '@/common/constant'
import Tag from '@/components/tag.vue'

import Article from '@/model/article'

import {ActionMethod} from 'vuex'
const article = namespace('article')

@Component({components: {Tag}})
export default class ListItem extends Vue {
  @Prop()
  items: Article

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
.home-article {
  .home-article-item-wrap {
    padding: 15px;
    width: 33.3%;
    float: left;
    transition: all 0.5s ease;
    &:hover {
      transform: translateY(-10px);
    }
  }
  .home-article-item {
    color: #333;
    font-size: 14px;
    background: #fff;
    padding: 20px;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.06);
    .image-wrap {
      width: 100%;
      height: 250px;
    }
    .image {
      text-align: center;
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
    .item-main {
      padding: 20px;
      border: 1px solid #eee;
      width: 300px;
      background: #fff;
      margin: -80px auto 0 auto;
      border-radius: 10px;
      position: relative;
      z-index: 1;
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
  }
}
</style>
