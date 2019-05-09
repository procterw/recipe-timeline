/* eslint-disable no-undef */
// import { sortByFlow } from './sortByFlow';
const { recipeStepsToTree } = require('./trees');
const {
  recipe,
  expectedRecipeTree,
  recipeMultipleRoots,
  expectedRecipeTreeMultipleRoots
} = require('./trees.mock');

describe('recipeStepsToTree', () => {
  describe('when steps are empty', () => {
    test('returns empty array', () => {
      const actual = recipeStepsToTree([]);
      const expected = [];
      expect(actual).toStrictEqual(expected);
    });
  });

  describe('complex nested steps', () => {
    test('returns a tree', () => {
      const actual = recipeStepsToTree(recipe);
      expect(actual).toStrictEqual(expectedRecipeTree);
    });
  });

  describe('when there are two root nodes', () => {
    test('returns two trees', () => {
      const actual = recipeStepsToTree(recipeMultipleRoots);
      expect(actual).toStrictEqual(expectedRecipeTreeMultipleRoots);
    });
  });
});
