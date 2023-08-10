import Vue from 'vue'
import App from './App.vue'
import plugin from '../src/assets/plugins.js'
import store from '../src/store/index.js'
import VueRouter from 'vue-router';
import router from '../src/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(plugin);
Vue.use(VueRouter);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  store,
  router,
  // beforeCreate(){
	 //  console.log('创建bus');
	 //  Vue.prototype.$bus=this
  // },
  // mounted(){
	 //  console.log(this)
  // }
}).$mount('#app')
