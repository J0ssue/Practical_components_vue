import Vue from 'vue'
import Modal from './plugins/ModalPlugin.js';
import App from './App.vue'
import router from './router'
import store from './store'
import "./main.scss";
import ScrollLink from './components/ScrollLink.vue';
import Dropdown from './components/Dropdown.vue';
import Visible from './components/Visible.vue';
import ConfirmationDialog from './components/ConfirmationDialog';
import ConfirmButton from './components/ConfirmButton';

Vue.config.productionTip = false
Vue.use(Modal);

// import reusable components:
Vue.component('scroll-link', ScrollLink);
Vue.component('dropdown', Dropdown);
Vue.component('visible', Visible);
Vue.component('confirmation-dialog', ConfirmationDialog);
Vue.component('confirm-button', ConfirmButton);

new Vue({
  router,
  store,
  methods: {
    confirm(message) {
      this.$modal.dialog(message)
        .then(confirmed => {
          if (confirmed) {
            alert('Proceed');
          } else {
            this.$modal.dialog('Okay, canceled');
          }
        })
    }
  },
  render: h => h(App)
}).$mount('#app');