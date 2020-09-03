<!-- @format -->

<template>
  <div class="home">
    <div class="banner">
      <div class="user-info">
      <img class="head" src="http://cdn.zhouzhoujiang.com/blog/user-head.jpg" alt="">
      <p class="name">我是周周酱</p>
      <p class="tip">Life isn`t about how to live through the storm, but how to dance in the rain. </p>
    </div>
    </div>
    
  </div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import {Loading, Catch} from '@/plugins/decorators'

@Component
export default class Home extends Vue {

 
}
</script>

<style lang="less" scoped>
/** @format */
.home{
  width:100%;
  overflow:hidden;
  .banner{
    width:140%;
    height: 100vh;
    margin-left:-20%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image:url('http://cdn.zhouzhoujiang.com/blog/home-banner2.png');
    border-radius: 0 0 50% 50%;
  }
  .user-info{
    width:600px;
    color:#fff;
    position: relative;
    padding: 0 10px;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    .head{
      width:150px;
      height:150px;
      border-radius:50%;
      border:3px solid #fff;
    }
    .name{
      font-size:28px;
      margin-top:20px;
    }
    .tip{
      font-size:20px;
      margin-top:20px;
    }
  }
}

</style>