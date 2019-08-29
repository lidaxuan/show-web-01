<template>
  <div id="app">
    <mt-header title="首页">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>

    <router-view/>
<mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="./assets/index.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="./assets/vip.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="./assets/Shopcart.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="./assets/find.png">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      select:''
    }
  }
}
</script>

<style>


</style>
