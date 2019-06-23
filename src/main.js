import Vue from 'vue'
import Modal from './plugins/ModalPlugin.js';
import App from './App.vue'
import router from './router'
import store from './store'
import "./main.scss";
import ScrollLink from './components/ScrollLink.vue';
import Dropdown from './components/Dropdown.vue';
import Visible from './components/Visible.vue';

Vue.config.productionTip = false
Vue.use(Modal);

// import reusable components:
Vue.component('scroll-link', ScrollLink);
Vue.component('dropdown', Dropdown);
Vue.component('visible', Visible);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');