import * as recipes from'../data/recipes.js';
import { getStepTimeRange } from './getStepTimeRange.js';

/**
 * Mocks an API which would, given a list of recipes, return the
 * list of steps, in order, required to complete the recipe.
 * @constructor
 * @param {Array[String]} recipeNames - A list of recipes to retrieve
 * @param {Array<Object>} data - An array of recipes
 * @returns {Array<Object>} - An array of recipe steps in optimal order
 */
export const getRecipesTimeline = async (recipeNames) => {
  let recipeTimeline = [];
  let maxStartTime = 0;

  // Add each recipe to the timeline
  recipeNames.forEach(rn => {
    const { steps, recipeName } = recipes[rn];
    // Add recipe name to each step so steps can later be regrouped
    const stepsWithRecipeName = steps.map(s => ({ ...s, recipeName }));
    recipeTimeline = [...recipeTimeline, ...stepsWithRecipeName ];
  });

  // Add time ranges to each step
  const sortedRecipeTimeline = recipeTimeline.map(step => {
    const { startTime, endTime } = (
      getStepTimeRange(step, recipeTimeline)
    );

    maxStartTime = Math.max(maxStartTime, startTime);

    return {
      ...step,
      startTime,
      endTime,
      elapsedTime: startTime - endTime,
    };
  }).map(step => {
    // Inverts times so recipes start in order
    return {
      ...step,
      startTime: maxStartTime - step.startTime,
      endTime: maxStartTime - step.endTime,
    };
  }).sort((a,b) => {
    return a.startTime - b.startTime;
  });

  // Delay response to mock request latency
  await setTimeout(() => {}, 300);
  return sortedRecipeTimeline;
};
