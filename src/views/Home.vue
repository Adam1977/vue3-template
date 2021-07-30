<template>
  <div class="home">
    <div class="fz-28 fw-7">标题啊</div>
    <div class="mg-l32 mg-t16">我是描述</div>
    <div class="home" v-for="i in 50" :key="i">home</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  created() {
    console.log(13123)
  }
}
</script>

<style scoped lang='less'>
.home {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
}
</style>
