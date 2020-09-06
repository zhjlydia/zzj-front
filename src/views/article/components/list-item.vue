<!-- @format -->

<template>
  <div
    class="list-item"
    @click="detail(item.id)"
  >
    <div>
      <p class="title">{{ item.title }}</p>
      <div
        class="tag"
        v-for="(tag, index) in item.tags"
        :key="index"
      >
        <el-tag
          size="small"
          type="danger"
          disable-transitions
        >{{ tag.content }}</el-tag>
      </div>
      <div class="description">{{ item.description }}</div>
      <div class="author flex">
        <img
          class="head"
          :src="item.author.image"
          alt=""
        />
        <span class="name">{{ item.author.username }}</span>
        <span class="time">{{ item.createdAt }}</span>
      </div>
    </div>
    <div class="image-wrap">
      <el-image
      v-if="item.image"
      class="image"
      :src="item.image"
      fit="cover"></el-image>
      <div v-else class="image">没有图</div>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'
const article = namespace('article')

@Component
export default class ListItem extends Vue {
  @Prop()
  item: any

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
  padding: 25px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);
  margin-bottom: 20px;
  position:relative;
  overflow: hidden;
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .description {
    margin-bottom: 15px;
  }
  .tag {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 15px;
  }
  .author {
    font-size:12px;
    display: flex;
    align-items: center;
    .name {
      margin: 0 10px;
      color: #989898;
    }
    .head {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    .time {
      padding-left: 10px;
      color: #989898;
      border-left: 1px solid #989898;
    }
  }
  .category {
    margin-top: 10px;
  }
  .button-group {
    display: flex;
    align-items: center;
  }
  .image-wrap{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    width:200px;
    background:rosybrown;
    
  }
  .image{
    text-align:center;
    width:100%;
    height:100%;
  }
}
</style>
