<template>
  <div>
    <h2>
      Home 页面
    </h2>
    <router-link to="/home/news" tag="button"> news</router-link>
    <router-link to="/home/messages" tag="button"> messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    console.log('home create');
  },
  destroyed() {
    console.log('home destroyed ');
  }
}
</script>
