import Vue from 'vue';
import App from './App.vue';
import vueCustomElement from 'vue-custom-element';
import AxGrid from './components/AxGrid.vue';

Vue.use(vueCustomElement);
Vue.config.productionTip = false

Vue.customElement('ax-grid', AxGrid);

new Vue({
  render: h => h(App),
}).$mount('#app');
