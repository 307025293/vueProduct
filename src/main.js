import Vue from 'vue'
import App from './App.vue'
//引入路由模块
import VueRouter from "vue-router"
//引入index组件
import index from './components/index.vue';
//引入商品详情commodity组件
import commodity from './components/commodity.vue';

//引入css样式
import './assets/statics/site/css/style.css';
//使用路由中间件
Vue.use(VueRouter);

//注册路由规则
const router = new VueRouter({
  routes: [
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/commodity',component:commodity}
  ]

})

Vue.config.productionTip = false

new Vue({
  el:"#app",
  //挂载到vue
  router,
  render: h => h(App)
})
