import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./main.scss";
import ScrollLink from './components/ScrollLink.vue';
import Dropdown from './components/Dropdown.vue';

Vue.config.productionTip = false
  // import reusable components:
Vue.component('scroll-link', ScrollLink);
Vue.component('dropdown', Dropdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')