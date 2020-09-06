<!-- @format -->

<template>
  <div class="home">
    <div class="banner">
      <div class="user-info">
        <div class="head-wrap">
          <img class="head" src="http://cdn.zhouzhoujiang.com/blog/user-head.jpg" alt="">
          <div class="name">周周酱</div>
        </div>
        <p class="tip">Life isn`t about how to live through the storm, but how to dance in the rain. </p>
        <div class="enter" @click="enter">Discover More</div>
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
  enter(){
    this.$router.push({
      name:'Article'
    })
  }
 
}
</script>

<style lang="less" scoped>
/** @format */
.home{
  width:100%;
  overflow:hidden;
  color:#42261b;
  .banner{
    width:140%;
    height: 100vh;
    margin-left:-20%;
    background-position: center;

    background-repeat: repeat;
    background-attachment: fixed;
    background-image:url('http://cdn.zhouzhoujiang.com/blog/bg.jpg');
    border-radius: 0 0 50% 50%;
    filter: contrast(90%);
    box-shadow: 0 2px 13px 0 rgba(0,0,0,.06);
  }
  .user-info{
    width:500px;
    
    position: relative;
    padding: 0 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    .head-wrap{
      width:300px;
      height:300px;
      border-radius:50%;
      border:3px solid #fff;
      box-shadow: 0 6px 15px rgba(36,37,38,0.08);
      position:relative;
      margin:0 auto;
    }
    .head{
      width:100%;
      height:100%;
      border-radius:50%;
    }
    .name{
      font-size:28px;
      margin-top:20px;
      position:absolute;
      width:150px;
      padding:0 30px;
      height:60px;
      line-height:60px;
      border-radius:30px;
      background:#fff;
      text-align:center;
      top:50px;
      left:200px;
    }
    .tip{
      padding:20px;
      font-size:20px;
      margin-top:20px;
    }
  }
  .enter{
    cursor: pointer;
    margin-top:20px;
    color: #fff;
    color:#42261b;
    border:1px solid #42261b;
    font-weight:600;
    padding: 8px 20px;
    letter-spacing: 2px;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.1);
    box-shadow: 0 0 4px rgba(0,0,0,.1);
    display:inline-block;
    border-radius:5px;
  }
}

</style>