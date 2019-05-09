/* eslint-disable no-undef */
// import { sortByFlow } from './sortByFlow';
const { sortByBranchDepth } = require('./sortByBranchDepth');
const {
  basicRecipe,
  expectedBasicRecipeSorted,
} = require('./sortByBranchDepth.mock');

describe('sortByBranchDepth', () => {
  describe('when there are no recipes', () => {
    test('returns an empty array', () => {
      const actual = sortByBranchDepth([]);
      expect(actual).toStrictEqual([]);
    });
  });

  describe('basic recipe', () => {
    test('sorts by branch depth, then time', () => {
      const actual = sortByBranchDepth(basicRecipe);
      expect(actual).toStrictEqual(expectedBasicRecipeSorted);
    });
  });

  describe('when there are two recipes', () => {
    test('recipes are separated', () => {
      // TODO
    });
  });
});
