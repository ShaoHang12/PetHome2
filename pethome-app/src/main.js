import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { NavBar, Tabbar, TabbarItem } from "vant";
import "vant/lib/index.css";
createApp(App)
  .use(store)
  .use(router)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .mount("#app");
