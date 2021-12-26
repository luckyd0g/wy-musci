import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible.js"
import "./styles/reset.css"
import router from "./router"
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, Icon, Search, List } from 'vant';
import { recommendMusicAPI } from "@/api"
import { newMusicAPI } from "@/api"

// async function fn() {
//   const res = await recommendMusicAPI()
//   console.log(res);
// }
// fn()
Vue.use(Search);
Vue.use(List);
Vue.use(Tabbar);
Vue.use(NavBar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
