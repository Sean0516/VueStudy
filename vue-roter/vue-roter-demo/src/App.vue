<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="/user/+userId" tag="button" replace>用户</router-link>
    <router-link :to="{path:'/profile' ,query:{
      id : 123,
      name: 'Sean',
      age:22
    }}" tag="button" replace>档案
    </router-link>

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      "userId": "Sean"
    }
  }

}
</script>
<style>
.router-link-active {
  color: #ff4256;
}
</style>
