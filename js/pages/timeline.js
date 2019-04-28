import { Timeline } from '../vis/Timeline/index.js';

const template = `
  <section id="timeline-page">
    <h1>Timeline page</h1>
    <p>Here is text talking about the timeline.</p>
    <div class="timeline-vis"></div>
    <p>Here is more text talking about the timeline.</p>
  </section>
`;

export const initializeTimelinePage = (selection) => {
  selection.html(template);

  new Timeline(selection, []);

  return selection;
};
