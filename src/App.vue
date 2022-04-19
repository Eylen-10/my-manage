

<template>
<div :class="{'my-body':router.currentRoute.value.path != '/login','hp100':router.currentRoute.value.path == '/login'}">
  <router-view></router-view>
</div>

</template>
<script setup>
const router = useRouter();

</script>
<style lang="scss">
#app {
  font-family: 'Open Sans', "PingFang SC", Helvetica, Arial, sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  height:calc(100vh);
  width: calc(100%);
  
}
.my-body{
  height:calc(100vh - 10px);
  width: calc(100% - 10px);
  margin: 5px;
  overflow: hidden;
  border-radius: 22px;
  background: #f5f8fa;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
body{
  background: #e2e2e0;
}

</style>
