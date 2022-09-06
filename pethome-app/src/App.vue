<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-if="$route.meta.showTab"></tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
export default {
  name: "app",
  created: function () {
    this.$router.push("/");
  },
  components: {
    Tabbar,
  },
};
</script>
