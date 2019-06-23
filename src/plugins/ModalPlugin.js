import Component from './Component.vue';

let Plugin = {
  install: function(Vue, options = {}) {
    Vue.component('modal', Component);
  }
}

export default Plugin;