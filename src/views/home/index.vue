<!-- @format -->

<template>
  <div class="home">
    <div class="banner">
      <div class="user-info">
        <div class="head-wrap">
          <img
            class="head"
            src="http://cdn.zhouzhoujiang.com/blog/user-head.jpg"
            alt=""
          />
          <div class="name">周周酱</div>
        </div>
        <p class="tip">Life isn`t about how to live through the storm, but how to dance in the rain.</p>
        <div
          class="enter"
          @click="enter"
        >Discover More</div>
      </div>
    </div>
    <p class="module-title">Recent Articles</p>
    <div class="article">
      <articles
        :items="articles"
        @detail="detail"
      ></articles>
    </div>
    <footer-bar />
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'
const home = namespace('home')
import Article from '@/model/article'
import articles from './components/articles.vue'
import footerBar from '@/layout/components/footerBar/index.vue'
import {Loading, Catch} from '@/plugins/decorators'

@Component({components: {articles, footerBar}})
export default class Home extends Vue {
  @home.State
  articles: Article[]

  @home.Action
  fetchList: ActionMethod

  @Catch
  @Loading
  created() {
    this.fetchList()
  }

  enter() {
    this.$router.push({
      name: 'Article'
    })
  }
  detail(id: number) {
    this.$router.push({name: 'ArticleDetail', params: {id: String(id)}})
  }
}
</script>

<style lang="less" scoped>
/** @format */
.home {
  width: 100%;
  overflow: hidden;
  color: #222;
  .banner {
    width: 140%;
    height: 100vh;
    margin-left: -20%;
    background-position: center;
    background-repeat: repeat;
    background-attachment: fixed;
    background-image: url('http://cdn.zhouzhoujiang.com/blog/bgg.png');
    border-radius: 0 0 50% 50%;
    box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.06);
  }
  .user-info {
    width: 500px;
    position: relative;
    padding: 50px;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 10px;
    .head-wrap {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 10px 20px rgba(36, 37, 38, 0.15);
      position: relative;
      margin: 0 auto;
    }
    .head {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .name {
      font-size: 20px;
      margin-top: 20px;
      position: absolute;
      width: 120px;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      background: #ffe082;
      text-align: center;
      top: 50px;
      left: 170px;
    }
    .tip {
      font-weight: bold;
      padding: 20px 0;
      font-size: 20px;
      margin: 20px auto 0 auto;
    }
  }
  .enter {
    cursor: pointer;
    margin-top: 20px;
    color: #222;
    border: 1px solid #222;
    padding: 8px 20px;
    letter-spacing: 2px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    display: inline-block;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    &:hover {
      background: #222;
      color: #fff;
    }
  }
  .module-title {
    font-size: 32px;
    text-align: center;
    padding: 30px 0;
    font-weight: bold;
  }
  .article {
    max-width: 1200px;
    margin: 0 auto 50px auto;
  }
}
@media (max-width: 650px) {
  .home {
    .banner {
      box-shadow: none;
      border-radius: 0;
    }
    .user-info {
      width: 100%;
      .tip {
        width: 80%;
      }
    }
  }
}
</style>
