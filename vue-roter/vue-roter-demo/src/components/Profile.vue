<template>
  <div>
    <h2> Profile 页面</h2>
    <ul>
      <li v-for="(value,key) in $route.query ">{{key }} : {{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
