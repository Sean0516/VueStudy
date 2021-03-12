<template>
  <div>
    <h2> Hello World Msg </h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2> Power  Counter</h2>
    <h2>{{$store.getters.powerAdd}}</h2>
    <h2> Id than 100</h2>
    <h2>{{$store.getters.filterId}}</h2>
    <h2>{{$store.getters.filterName("ssss")}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
}
</script>

<style scoped>

</style>
