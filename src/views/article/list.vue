<!-- @format -->

<template>
  <div>
    <div class="main">
      <div class="article-list">
        <list-item
          v-for="(item, index) in articles"
          :key="index"
          :item="item"
          @detail="detail"
        ></list-item>
      </div>
      <div class="pagination">
        <el-pagination
          hide-on-single-page
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="size"
          :current-page="index"
          @current-change="changePage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import Article from '@/model/article'

import listItem from './components/list-item.vue'
import {Loading, Catch} from '@/plugins/decorators'

const article = namespace('article')

@Component({components: {listItem}})
export default class Articles extends Vue {
  @article.State
  articles: Article[]

  @article.State
  index: number

  @article.State
  size: number

  @article.State
  total: number

  @article.Action
  fetchList: ActionMethod

  async created() {
    this.fetch(1)
  }

  changePage(index) {
    this.fetch(index)
  }

  @Catch
  @Loading
  async fetch(index) {
    await this.fetchList(index)
  }

  detail(id: number) {
    this.$router.push({name: 'ArticleDetail', params: {id: String(id)}})
  }
}
</script>

<style lang="less" scoped>
/** @format */

.main {
  padding: 30px;
  min-height: 400px;
  .head-bar {
    margin-bottom: 20px;
  }
  .pagination {
    text-align: right;
    padding: 20px 0;
  }
}
</style>
