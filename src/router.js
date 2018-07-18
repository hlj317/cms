import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";   

//开启debug模式(开启错误提示)
Vue.config.debug = true;
Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    
    {
      path: '/',
      component: App
    }

  ]
})












