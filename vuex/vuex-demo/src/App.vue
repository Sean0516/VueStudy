<template>
  <div id="app">
    <h2>App  Msg</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="numAdd">++</button>
    <button @click="numDelete">--</button>

    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "App",
  components:{
    HelloWorld
  },
  methods:{
    numAdd(){
      this.$store.commit("add")
    },
    numDelete(){
      this.$store.commit("delete")
    }
  }
}
</script>
<style>

</style>
