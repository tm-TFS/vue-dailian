// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import '@/assets/ali-icon/iconfont.css'
import '@/assets/reset.css'

import fastclick from 'fastclick';
fastclick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(iView)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
export default router;
