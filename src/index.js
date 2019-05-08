import Timeline from './views/Timeline/index.vue';
import '../css/index.css';

const routes = [
  { path: '/', component: Timeline },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#app');
