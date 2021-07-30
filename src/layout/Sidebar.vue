<template>
  <div class="sidebar">
    <ul>
      <li class="sub-menu" v-for="menu in menuList" :key="menu.path" @click="goToPage(menu)">
        {{ menu.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      menuList: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '加载',
          path: '/loading'
        },
        {
          title: '关于',
          path: '/about'
        }
      ]
    }
  },
  methods: {
    goToPage(menu) {
      const path = menu.path
      this.$router.push({
        path
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sidebar {
  min-width: 192px;
  .sub-menu {
    height: 40px;
    line-height: 40px;
    color: #c2c2c2;
    cursor: pointer;
    padding-left: 24px;
    list-style: none;
    margin: 4px 0;
  }
  .sub-menu:hover {
    color: #fff;
    background: #191e41;
    border-radius: 20px 0 0 20px;
  }
}
</style>
