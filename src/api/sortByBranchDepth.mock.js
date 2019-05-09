export const basicRecipe = [
  {
    stepName: 'cook pasta',
    dependencies: ['boil water'],
    startTime: 5,
  },
  {
    stepName: 'open a can of sauce',
    dependencies: [],
    startTime: 8,
  },
  {
    stepName: 'boil water',
    dependencies: [],
    startTime: 0,
  },
  {
    stepName: 'drain pasta',
    dependencies: ['cook pasta'],
    startTime: 10,
  },
  {
    stepName: 'add sauce to pasta',
    dependencies: ['drain pasta', 'open a can of sauce'],
    startTime: 15,
  },
];

export const expectedBasicRecipeSorted = [
  {
    stepName: 'boil water',
    dependencies: [],
    startTime: 0,
  },
  {
    stepName: 'cook pasta',
    dependencies: ['boil water'],
    startTime: 5,
  },
  {
    stepName: 'drain pasta',
    dependencies: ['cook pasta'],
    startTime: 10,
  },
  {
    stepName: 'open a can of sauce',
    dependencies: [],
    startTime: 8,
  },
  {
    stepName: 'add sauce to pasta',
    dependencies: ['drain pasta', 'open a can of sauce'],
    startTime: 15,
  },
];
