// Trees are a better data structure for ______

// Converts a flat array of recipes to a tree structure based on
// "dependencies". Adds
export const recipeStepsToTree = (steps) => {
  // Flattens all dependencies
  const allDependencies = steps.reduce((acc, s) => {
    return [...acc, ...s.dependencies];
  }, []);

  const rootSteps = steps.filter((s) => {
    return !allDependencies.includes(s.stepName);
  });

  return rootSteps.map(s => buildTree(s, steps));
  
};

const buildTree = (step, allSteps) => {
  const childSteps = allSteps.filter((s) => {
    return step.dependencies.includes(s.stepName);
  });

  return {
    ...step,
    children: childSteps.map(s => buildTree(s, allSteps))
  };
};

export const flattenTree = () => {

};
