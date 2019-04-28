import { initializeTimelinePage } from './pages/timeline.js';

// const navSelector = d3.select('#nav');

const contentSelector = d3.select('#content')
  .call(initializeTimelinePage);

