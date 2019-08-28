import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate, { Validator } from "vee-validate";
const es = require('vee-validate/dist/locale/es');

Vue.use(VeeValidate);
Validator.localize('es', es);
const config = {
  locale: 'es'
};
Vue.use(VeeValidate, config);


// Register it globally
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
