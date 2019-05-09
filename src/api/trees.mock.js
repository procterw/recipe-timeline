export const recipe = [
  { stepName: 'a', dependencies: ['b', 'd'] },
  { stepName: 'b', dependencies: ['c'] },
  { stepName: 'c', dependencies: [] },
  { stepName: 'd', dependencies: ['e', 'f'] },
  { stepName: 'e', dependencies: [] },
  { stepName: 'f', dependencies: [] }
];

export const expectedRecipeTree = [
  {
    stepName: 'a',
    dependencies: ['b', 'd'],
    children: [
      {
        stepName: 'b',
        dependencies: ['c'],
        children: [
          {
            stepName: 'c',
            dependencies: [],
            children: []
          },
        ]
      }, 
      {
        stepName: 'd',
        dependencies: ['e', 'f'],
        children: [
          {
            stepName: 'e',
            dependencies: [],
            children: []
          },
          {
            stepName: 'f',
            dependencies: [],
            children: []
          }
        ]
      }
    ]
  }
];

export const recipeMultipleRoots = [
  { stepName: 'a', dependencies: ['b'] },
  { stepName: 'b', dependencies: [] },
  { stepName: 'c', dependencies: ['d'] },
  { stepName: 'd', dependencies: ['e', 'f'] },
  { stepName: 'e', dependencies: [] },
  { stepName: 'f', dependencies: [] }
];

export const expectedRecipeTreeMultipleRoots = [
  {
    stepName: 'a',
    dependencies: ['b'],
    children: [
      {
        stepName: 'b',
        dependencies: [],
        children: []
      },
    ]
  },
  {
    stepName: 'c',
    dependencies: ['d'],
    children: [
      {
        stepName: 'd',
        dependencies: ['e', 'f'],
        children: [
          {
            stepName: 'e',
            dependencies: [],
            children: []
          },
          {
            stepName: 'f',
            dependencies: [],
            children: []
          }
        ]
      }
    ]
  }
];
