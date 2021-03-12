<template>

  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="icon" src="@/assets/img/bar/email.svg">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="@/assets/img/bar/email.svg">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/car">
      <img slot="icon" src="@/assets/img/bar/email.svg">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/person">
      <img slot="icon" src="@/assets/img/bar/email.png">
      <div slot="text">个人中心</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar},
  comments: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
