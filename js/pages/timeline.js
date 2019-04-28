import { Timeline } from '../vis/Timeline/index.js';
import { getRecipesTimeline } from '../api/mockApi.js';


const template = `
  <section id="timeline-page">
    <h1>Timeline page</h1>
    <p>Here is text talking about the timeline.</p>
    <div class="timeline-vis-wrapper"></div>
    <p>Here is more text talking about the timeline.</p>
  </section>
`;

export const initializeTimelinePage = async (selection) => {
  selection.html(template);

  const recipeTimeline = await getRecipesTimeline(['oatmeal', 'rice']);

  new Timeline(
    selection.select('.timeline-vis-wrapper'),
    recipeTimeline
  );

  return selection;
};
