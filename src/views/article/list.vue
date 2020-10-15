<!-- @format -->

<template>
  <div class="article-list main">
    <div class="list">
      <div
        v-for="(item, index) in articles"
        :key="index"
      >
        <list-item
          :item="item"
          @detail="detail"
        ></list-item>
        <el-divider v-if="index < articles.length - 1"><i class="el-icon-sunrise"></i></el-divider>
      </div>
    </div>
    <div
      class="more"
      @click="more"
      v-if="loadListAbled"
    >加载更多</div>
    <div
      class="loading"
      v-if="listLoading"
    ><i class="el-icon-bicycle mar-r-10"></i>加载中...</div>
    <category-comp
      :items="categories"
      :selected="currentCategory"
      @select="selectCategory"
    ></category-comp>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import Article from '@/model/article'
import Category from '@/model/category'

import listItem from './components/list-item.vue'
import categoryComp from './components/category.vue'

import {Loading, Catch} from '@/plugins/decorators'

const article = namespace('article')
const category = namespace('category')

@Component({components: {listItem, categoryComp}})
export default class Articles extends Vue {
  @article.State
  articles: Article[]

  @article.State
  index: number

  @article.State
  size: number

  @article.State
  total: number

  @article.State
  listLoading: boolean

  @article.Getter
  loadListAbled: boolean

  @article.Action
  fetchList: ActionMethod

  @article.State
  categories: Category[]

  @article.State
  currentCategory: number

  @article.Mutation('M_SET_CURRENTCATEGORY')
  setCurrentCategory: ActionMethod

  @article.Action
  fetchCategory: ActionMethod

  @Catch
  @Loading
  async created() {
    await Promise.all([this.fetchCategory(), this.fetchList(true)])
  }

  more() {
    this.fetchList(false)
  }

  @Catch
  async selectCategory(categoryId: number) {
    this.setCurrentCategory(categoryId)
    await this.fetchList(true)
  }

  detail(id: number) {
    this.$router.push({name: 'ArticleDetail', params: {id: String(id)}})
  }
}
</script>

<style lang="less" scoped>
/** @format */

.article-list {
  max-width: 1100px;
  margin: 0 auto;
  .list {
    min-height: 100vh;
    background: #fff;
    padding: 30px;
    box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.06);
  }
  .more,
  .loading {
    height: 40px;
    line-height: 40px;
    width: 300px;
    background: #ffe082;
    text-align: center;
    margin: 10px auto;
    border-radius: 20px;
  }
  .more {
    cursor: pointer;
  }
}
@media (max-width: 650px) {
  .article-list {
    .list {
      padding: 20px;
    }
    .more,
    .loading {
      width: 60%;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
