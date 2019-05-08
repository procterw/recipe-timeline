import TimelineDemo from './views/TimelineDemo/index.vue';
import RecipeTrees from './views/RecipeTrees/index.vue';
import '../css/index.css';

const routes = [
  { path: '/', component: RecipeTrees },
  // { path: '/timeline-demo', component: TimelineDemo },
  { path: '/timeline-demo', component: TimelineDemo },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#app');
