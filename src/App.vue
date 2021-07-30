<template>
  <Layout>
    <router-view />
  </Layout>
</template>
<script>
import Layout from '@/layout/Layout.vue'
export default {
  name: 'App',
  props: {
    msg: String,
  },
  components: {
    Layout,
  },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
  outline: none;
}
body {
  min-width: 1200px;
  background: #f0f2f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
</style>
