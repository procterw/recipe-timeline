import * as recipes from'./data/recipes.js';
import { ingredientDb } from './data/ingredientDb.js';
import { getStepTimeRange } from './getStepTimeRange.js';
import { sortByFlow } from './sortByFlow.js';

/**
 * Mocks an API call which fills out the ingredient list in recipe
 * step. The step only stores the id and the measurement, and metadata
 * like descriptions or pictures would be stored in a separate DB
 * @constructor
 * @param {Array<Object>} ingredients - A list of ingredients
 * @param {string} ingredients[].id - The ingredient id
 * @param {string} ingredients[].measurement - The amount and unit
 * @returns {Array<Object>} - An array of recipe steps in optimal order
 */
const fillOutIngredients = ingredients => {
  return ingredients.map(({ id, measurement }) => {
    return ingredientDb[id](measurement);
  });
};

/**
 * Mocks an API which would, given a list of recipes, return the
 * list of steps, in order, required to complete the recipe.
 * @constructor
 * @param {Array[String]} recipeNames - A list of recipes to retrieve
 * @param {Array<Object>} data - An array of recipes
 * @param {String} sort - A string indicating how to sort the steps
 * @returns {Array<Object>} - An array of recipe steps in some order
 */
export const getRecipesTimeline = async (recipeNames, sort='time') => {
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
  const steps = recipeTimeline.map(step => {
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
  }).map(step => {
    // Fills out ingredients metadata
    return {
      ...step,
      ingredients: fillOutIngredients(step.ingredients),
    };
  });

  // Delay response to mock request latency
  await setTimeout(() => {}, 300);

  if (sort === 'time') {
    return steps.sort((a,b) => {
      return a.startTime - b.startTime;
    });
  }

  if (sort === 'flow') {
    return sortByFlow(startTimeSortedRecipeTimeline);
  }
};
