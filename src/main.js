import Vue from 'vue';
import App from './App';
import Store from './store/store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Store((store) => {
  const vueApp = new Vue({
    el: '#app',
    store: store,
    template: '<App/>',
    components: { App }
  });
});
