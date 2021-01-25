<template>
<div>
  <h2>
    这里是用户页面
  </h2>
  <H3>用户名: {{userId}} </H3>
  <H3>用户名2 : {{$route.params.userId}} </H3>
</div>
</template>

<script>

export default {
  name: 'User',
  computed:{
    userId(){
      return this.$route.params.userId;
    }
  }

}
</script>
