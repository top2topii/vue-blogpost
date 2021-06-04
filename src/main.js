import Vue from 'vue'
import App from './App.vue'
import 'iview/dist/styles/iview.css'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

Vue.config.productionTip = false
Vue.use(iView, {locale: locale});

new Vue({
  render: h => h(App),
}).$mount('#app')
