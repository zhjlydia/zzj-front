<!-- @format -->

<template>
  <div>
    <div
      class="article-detail"
      v-if="articleDetail"
    >
    <div class="article-image" :style="{'background-image':'url('+articleDetail.image+')'}"></div>
      <div class="detail-body">
        <div class="article-header">
          <div>
            <div class="title">{{ articleDetail.title }}</div>
            <tag-component
              v-for="(item, index) in articleDetail.tags"
              :key="index"
              :color="getColor(item.id)"
              :selected="true"
            >{{ item.content }}</tag-component>
          </div>
          <div class="time">
            <div>{{ articleDetail.createdAt }}</div>
          </div>
        </div>
        <div
          class="content article__content"
          v-html="articleDetail.content"
          v-hljs-directive
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import 'highlight.js/styles/dark.css'

import TagComponent from '@/components/tag.vue'

import Article from '@/model/article'
import Category from '@/model/category'
import Tag from '@/model/tag'

const article = namespace('article')
const category = namespace('category')
const tag = namespace('tag')

import {COLOR_ARRAY} from '@/common/constant'
import {Loading, Catch} from '@/plugins/decorators'

@Component({components: {TagComponent}})
export default class ArticleDetail extends Vue {
  @article.State
  articleDetail: Article

  @article.State
  id: number

  @article.Action('fetchDetail')
  fetchArticleDetail: ActionMethod

  @article.Action
  resetArticleDetail: ActionMethod

  @article.Mutation
  M_SET_ID: ActionMethod

  getColor(id: number) {
    let index = id % COLOR_ARRAY.length
    return COLOR_ARRAY[index]
  }

  async created() {
    const {id = 0} = this.$route.params
    let articleId = Number(id)
    if (articleId) {
      await this.M_SET_ID(articleId)
      await this.init()
    }
  }

  @Catch
  @Loading
  async init() {
    await this.fetchArticleDetail()
    if (this.articleDetail) {
      let article = this.articleDetail
    }
  }

  destroyed() {
    this.resetArticleDetail()
  }
}
</script>
<style lang="less" scoped>
/** @format */

.article-detail {
  position: relative;
  padding-top:300px;
  background:#fff;
  .article-image{
    position: absolute;
    top:0;
    left:0;
    right:0;
    height: 600px;
    margin-bottom: 60px;
    z-index: 1;
    border-radius: 2px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
 
    -webkit-box-shadow: 0 -40px 30px 40px #fff inset;
    box-shadow: inset 0 -40px 30px 40px #fff;
  }
  .detail-body {
    position:relative;
    z-index:2;
    width:1226px;
    margin:0 auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .article-header {
    background: #fff;
    color: #333;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #c7c5c5;
    .title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .time {
      font-size: 14px;
      padding: 10px;
      border: 1px dashed #c7c5c5;
      width: 100px;
      line-height: 30px;
      text-align: center;
    }
  }
  .content {
    background: #fff;
    padding: 30px;
  }
  .save-btn {
    float: right;
    width: 100px;
    display: block;
    margin: 30px 0;
  }
}
</style>
