<template>
  <div class="layout">
    <div class="sidebar"><sidebar />></div>
    <div class="header">
      2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222223
    </div>
    <div class="content">
      <div class="slot-body">
        <slot></slot>
      </div>
      <div class="footer">footer</div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/layout/Sidebar.vue'
export default {
  name: 'Layout',
  props: {
    msg: String
  },
  components: {
    sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    z-index: 999;
    color: #fff;
    background: #2c3153;
    flex-shrink: 0;
  }
  .header {
    position: fixed;
    top: 0;
    left: 200px;
    right: 0;
    height: 64px;
    min-width: 1000px;
    z-index: 80;
    background: pink;
    word-break: break-all;
  }
  .content {
    position: absolute;
    z-index: 2;
    top: 60px;
    left: 200px;
    right: 0;
    padding: 16px;
    min-width: 1000px;
    .slot-body {
      min-height: calc(100vh - 60px - 50px);
    }
    .footer {
      background: pink;
      width: 100%;
      height: 50px;
    }
  }
}
</style>
