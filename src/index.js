import App from './App.vue';

const routes = [
  { path: '/', component: App },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#app');

