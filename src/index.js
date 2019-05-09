import TimelineDemo from './views/TimelineDemo/index.vue';
import RecipeTrees from './views/RecipeTrees/index.vue';
import '../css/index.css';

const routes = [
  { path: '/', component: TimelineDemo },
  { path: '/about', component: RecipeTrees },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#app');
