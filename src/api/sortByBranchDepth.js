import { recipeStepsToTree } from './trees';

/**
 * Sorts a list of recipe steps according to "branch depth" by searching
 * the leftmost branch of each node and adding lead nodes to an array.
 * 
 * @param {Array<Object>} steps - An unsorted list of recipe steps
 * @returns {Array<Object>} - A sorted list of recipe steps
 */
export const sortByBranchDepth = (steps) => {
  const stepTrees = recipeStepsToTree(steps);
  
  return stepTrees.reduce((sortedSteps, tree) => {
    const nestedSteps = getNestedSteps(tree).map(step => {
      delete step.children;
      return step;
    });
    return [...sortedSteps, ...nestedSteps];
  }, []);
};

const getMaxChildDepth = (tree, parentLevel = 0) => {
  if (!tree.children.length) {
    return parentLevel;
  }

  return Math.max(...tree.children.map(child => {
    return getMaxChildDepth(child, parentLevel + 1);
  }));
};

const getNestedSteps = (step) => {
  const sortedChildSteps = step.children.sort((a,b) => {
    const depthDiff = getMaxChildDepth(b) - getMaxChildDepth(a);
    if (depthDiff !== 0) return depthDiff;
    return a.startTime - b.startTime;
  });

  const nestedChildSteps = sortedChildSteps.reduce((acc, s) => {
    return [...acc, ...getNestedSteps(s),];
  }, []);

  // parent nodes come after children
  return [...nestedChildSteps, step];
};
