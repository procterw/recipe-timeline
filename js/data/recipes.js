import { StepsEnum } from './StepsEnum';
// import { ingredients as igd } from './ingredients';
// import { equipment as eqp } from './equipment';

export const oatmeal = {
  recipeName: 'Oatmeal with nuts seeds and fruit',
  steps: [
    {
      stepName: 'Boil water',
      ingredients: {
        water: '5 cups'
      },
      dependencies: [],
      type: StepsEnum.HEAT,
      duration: 5,
      instructions: 'Bring water to a boil.'
    },
    {
      stepName: 'Add oats to water',
      ingredients: {
        oats: '1 cup'
      },
      dependencies: ['Boil water'],
      type: StepsEnum.COMBINE,
      duration: 1,
      instructions: 'Add oats.'
    },
    {
      stepName: 'Cook oats',
      ingredients: {},
      dependencies: ['Add oats to water'],
      type: StepsEnum.SIMMER,
      duration: 15,
      instructions: 'Simmer for $duration'
    },
    {
      stepName: 'Prep toppings',
      ingredients: {
        apples: '1',
        dates: '3',
        pumpkinSeeds: '1 handful',
        walnuts: '1 handful'
      },
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Chop apples and dates into small pieces.'
    },
    {
      stepName: 'Finish oatmeal',
      ingredients: {
        cinnamon: { measurement: '1 tsp' }
      },
      dependencies: ['Prep toppings', 'Cook oats'],
      type: StepsEnum.COMBINE,
      duration: 2,
      instructions: 'Add toppings and cinnamon to oats. Serve.'
    }
  ]
};

export const rice = {
  recipeName: 'Rice',
  steps: [
    {
      stepName: 'Prepare rice',
      ingredients: {
        rice: '1 cup'
      },
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Rinse rice.'
    },
    {
      stepName: 'Cook rice',
      ingredients: {
        water: '1 cups'
      },
      dependencies: ['Prepare rice'],
      type: StepsEnum.BOIL,
      duration: 20,
      instructions: 'Cook rice in water.'
    },
    {
      stepName: 'Let rice rest',
      ingredients: {},
      dependencies: ['Cook rice'],
      type: StepsEnum.REST,
      duration: 5,
      instructions: 'Let rice rest.'
    }
  ]
};

export const greens = {
  recipeName: 'Greens with broccoli and garlic',
  steps: [
    {
      stepName: 'Prepare garlic',
      ingredients: {
        garlic: '6 cloves'
      },
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Peel and slice $garlic.'
    },
    {
      stepName: 'Prepare kale',
      ingredients: {
        kale: '1 bunch'
      },
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Remove stems, chop, and rinse $kale.'
    },
    {
      stepName: 'Prepare broccoli',
      ingredients: {
        water: '1 large head'
      },
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Cut florets off of head. Rinse.'
    },
    {
      stepName: 'Cook garlic',
      ingredients: {
        oliveOil: '1 tbsp'
      },
      dependencies: ['Prepare garlic'],
      type: StepsEnum.SAUTEE,
      duration: 8,
      instructions: 'Add garlic to cold pan with oil. Heat on medium until garlic is golden.'
    },
    {
      stepName: 'Cook greens',
      ingredients: {},
      dependencies: ['Cook garlic', 'Prepare kale', 'Prepare broccoli'],
      type: StepsEnum.SAUTEE,
      duration: 5,
      instructions: 'Add greens to pan and stir occasionally.'
    }
  ]
};

export const tofu = {
  recipeName: 'Simple crispy tofu',
  steps: [
    {
      stepName: 'Prepare tofu',
      ingredients: {
        tofu: '1 block',
        cornStarch: '1 tbsp',
        garlicPowder: '1 tsp',
        gingerPowder: '1 tsp'
      },
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 10,
      instructions: 'Cube and pat tofu dry. Toss with corn starch and seasoning.'
    },
    {
      stepName: 'Heat oil',
      ingredients: {
        sesameOil: '2 tbsp'
      },
      dependencies: [],
      type: StepsEnum.HEAT,
      duration: 5,
      instructions: 'Heat pan and oil over medium-high heat.'
    },
    {
      stepName: 'Fry tofu',
      ingredients: {},
      dependencies: ['Prepare tofu', 'Heat oil'],
      type: StepsEnum.SAUTEE,
      duration: 10,
      instructions: 'Fry tofu, partially covered, flipping halfway through.'
    },
    {
      stepName: 'Cook in soy sauce',
      ingredients: {
        soySauce: '1 tbsp'
      },
      dependencies: ['Fry tofu'],
      type: StepsEnum.SAUTEE,
      duration: 3,
      instructions: 'Add soy sauce to tofu, toss, and continue to cook.'
    },
    {
      stepName: 'Rest tofu',
      ingredients: {},
      dependencies: ['Cook in soy sauce'],
      type: StepsEnum.REST,
      duration: 5,
      instructions: 'Take off of the heat and allow tofu to rest.'
    },
  ]
};
