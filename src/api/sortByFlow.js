/**
 * Sorts a list of recipe steps according to "flow" by searching
 * the leftmost branch of each node and adding lead nodes to an array.
 * 
 * @param {Array<Object>} steps - An unsorted list of recipe steps
 * @returns {Array<Object>} - A sorted list of recipe steps
 */
export const sortByFlow = (steps) => {
  // Flattens all dependencies
  const allDependencies = steps.reduce((acc, s) => {
    return [...acc, ...s.dependencies];
  }, []);

  return steps.filter((s) => {
    return !allDependencies.includes(s.stepName);
  }).reduce((acc, s) => {
    return [...acc, ...getNestedSteps(s, steps)];
  }, []);
};

const getNestedSteps = (step, allSteps) => {
  const childSteps = allSteps.filter((s) => {
    return step.dependencies.includes(s.stepName);
  }).sort((a,b) => {
    return a.startTime - b.startTime;
  }).reduce((acc, s) => {
    return [...acc, ...getNestedSteps(s, allSteps)];
  }, []);

  return [...childSteps, step];
};
