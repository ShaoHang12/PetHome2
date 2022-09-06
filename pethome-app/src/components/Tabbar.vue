<template>
  <div class="tab">
    <div
      class="tab_item"
      v-for="(item, index) in tabBarImg"
      :key="index"
      @click="switchToTab(item.path)"
    >
      <img :src="$route.path === item.path ? item.icon : item.normal" alt="" />
      <span :class="$route.path === item.path ? 'active' : ''">{{
        item.title
      }}</span>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "Tabbar",
  data() {
    return {
      tabBarImg: [
        {
          path: "/home",
          normal: require("@/assets/TabIcons/home.png"),
          icon: require("@/assets/TabIcons/home-active.png"),
          title: "首页",
        },
        {
          path: "/cate",
          normal: require("@/assets/TabIcons/cate.png"),
          icon: require("@/assets/TabIcons/cate-active.png"),
          title: "分类",
        },
        {
          path: "/cart",
          normal: require("@/assets/TabIcons/cart.png"),
          icon: require("@/assets/TabIcons/cart-active.png"),
          title: "购物车",
        },
        {
          path: "/my",
          normal: require("@/assets/TabIcons/my.png"),
          icon: require("@/assets/TabIcons/my-active.png"),
          title: "我的",
        },
      ],
    };
  },
  methods: {
    switchToTab(path) {
      console.log(path);
      this.$router.replace(path);
    },
  },
};
</script>
<style type="text/css">
* {
  margin: 0;
  padding: 0;
}
.tab {
  width: 100%;
  height: 10vh;
  display: flex;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 999;
}
.tab_item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.tab_item img {
  width: 30px;
  height: 30px;
}
.active {
  color: rgb(33, 193, 33);
}
</style>
