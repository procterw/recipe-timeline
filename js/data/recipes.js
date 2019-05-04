import { StepsEnum } from './StepsEnum.js';
// import { ingredients as igd } from './ingredients';
// import { equipment as eqp } from './equipment';

export const oatmeal = {
  recipeName: 'Oatmeal with nuts seeds and fruit',
  steps: [
    {
      stepName: 'Boil water',
      ingredients: [
        { id: 'water', measurement: '5 cups' },
      ],
      dependencies: [],
      type: StepsEnum.HEAT,
      duration: 5,
      instructions: 'Bring water to a boil.'
    },
    {
      stepName: 'Add oats to water',
      ingredients: [
        { id: 'oats', measurement: '1 cup' },
      ],
      dependencies: ['Boil water'],
      type: StepsEnum.COMBINE,
      duration: 1,
      instructions: 'Add oats.'
    },
    {
      stepName: 'Cook oats',
      ingredients: [],
      dependencies: ['Add oats to water'],
      type: StepsEnum.SIMMER,
      duration: 15,
      instructions: 'Simmer for $duration'
    },
    {
      stepName: 'Prep toppings',
      ingredients: [
        { id: 'apples', measurement: '1', },
        { id: 'dates', measurement: '3', },
        { id: 'pumpkinSeeds', measurement: '1 handful', },
        { id: 'walnuts', measurement: '1 handful' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Chop apples and dates into small pieces.'
    },
    {
      stepName: 'Finish oatmeal',
      ingredients: [
        { id: 'cinnamon', measurement: { measurement: '1 tsp' } },
      ],
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
      ingredients: [
        { id: 'rice', measurement: '1 cup' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 3,
      instructions: 'Rinse rice.'
    },
    {
      stepName: 'Cook rice',
      ingredients: [
        { id: 'water', measurement: '1 cups' },
      ],
      dependencies: ['Prepare rice'],
      type: StepsEnum.BOIL,
      duration: 20,
      instructions: 'Cook rice in water.'
    },
    {
      stepName: 'Let rice rest',
      ingredients: [],
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
      ingredients: [
        { id: 'garlic', measurement: '6 cloves' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Peel and slice $garlic.'
    },
    {
      stepName: 'Prepare kale',
      ingredients: [
        { id: 'kale', measurement: '1 bunch' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Remove stems, chop, and rinse $kale.'
    },
    {
      stepName: 'Prepare broccoli',
      ingredients: [
        { id: 'water', measurement: '1 large head' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Cut florets off of head. Rinse.'
    },
    {
      stepName: 'Cook garlic',
      ingredients: [
        { id: 'oliveOil', measurement: '1 tbsp' },
      ],
      dependencies: ['Prepare garlic'],
      type: StepsEnum.SAUTEE,
      duration: 8,
      instructions: 'Add garlic to cold pan with oil. Heat on medium until garlic is golden.'
    },
    {
      stepName: 'Cook greens',
      ingredients: [],
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
      ingredients: [
        { id: 'tofu', measurement: '1 block', },
        { id: 'cornStarch', measurement: '1 tbsp', },
        { id: 'garlicPowder', measurement: '1 tsp', },
        { id: 'gingerPowder', measurement: '1 tsp' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 10,
      instructions: 'Cube and pat tofu dry. Toss with corn starch and seasoning.'
    },
    {
      stepName: 'Heat oil',
      ingredients: [
        { id: 'sesameOil', measurement: '2 tbsp' },
      ],
      dependencies: [],
      type: StepsEnum.HEAT,
      duration: 5,
      instructions: 'Heat pan and oil over medium-high heat.'
    },
    {
      stepName: 'Fry tofu',
      ingredients: [],
      dependencies: ['Prepare tofu', 'Heat oil'],
      type: StepsEnum.SAUTEE,
      duration: 10,
      instructions: 'Fry tofu, partially covered, flipping halfway through.'
    },
    {
      stepName: 'Cook in soy sauce',
      ingredients: [
        { id: 'soySauce', measurement: '1 tbsp' },
      ],
      dependencies: ['Fry tofu'],
      type: StepsEnum.SAUTEE,
      duration: 3,
      instructions: 'Add soy sauce to tofu, toss, and continue to cook.'
    },
    {
      stepName: 'Rest tofu',
      ingredients: [],
      dependencies: ['Cook in soy sauce'],
      type: StepsEnum.REST,
      duration: 5,
      instructions: 'Take off of the heat and allow tofu to rest.'
    },
  ]
};

export const tempeh = {
  recipeName: 'Tempeh stirfry with buckwheat noodles',
  steps: [
    {
      stepName: 'Prep mushrooms',
      ingredients: [
        { id: 'mushrooms', measurement: '12 oz', },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 4,
      instructions: 'Wipe off mushroom caps and cut into 1/4 inch slices.'
    },
    {
      stepName: 'Prep tempeh',
      ingredients: [
        { id: 'tempeh', measurement: '1 block' },
        { id: 'cornStarch', measurement: '1 tbsp', },
        { id: 'garlicPowder', measurement: '1 tsp', },
        { id: 'gingerPowder', measurement: '1 tsp' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 3,
      instructions: 'Cut tempeh into small cubes. Toss with cornstarch and seasoning.'
    },
    {
      stepName: 'Prep broccolini',
      ingredients: [
        { id: 'broccolini', measurement: '1 bunch' }
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 2,
      instructions: 'Chop broccolini at an angle into 1 inch pieces. Rinse.'
    },
    {
      stepName: 'Prep spinach',
      ingredients: [
        { id: 'spinach', measurement: '1 bunch' }
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 2,
      instructions: 'Roughly chop spinach into bite size pieces. Rinse.'
    },
    {
      stepName: 'Slice ginger',
      ingredients: [
        { id: 'ginger', measurement: '1 thumb sized piece' }
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 2,
      instructions: 'Slice ginger into thin strips.'
    },
    {
      stepName: 'Prep onions and garlic',
      ingredients: [
        { id: 'onions', measurement: '1 large' },
        { id: 'garlic', measurement: '4 cloves' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 5,
      instructions: 'Add soy sauce to tofu, toss, and continue to cook.'
    },
    {
      stepName: 'Prep green onions',
      ingredients: [
        { id: 'greenOnions', measurement: '3' },
      ],
      dependencies: [],
      type: StepsEnum.PREP,
      duration: 4,
      instructions: 'Chop the white and light green parts of green onions into thin slices.'
    },

    {
      stepName: 'Boil water',
      ingredients: [],
      dependencies: [],
      type: StepsEnum.BOIL,
      duration: 5,
      instructions: 'Fill a large pot with 3 inches of water and heat on high until boiling.'
    },
    {
      stepName: 'Heat pan for vegetables',
      ingredients: [],
      dependencies: [],
      type: StepsEnum.HEAT,
      duration: 4,
      instructions: 'Fill a large pot with 3 inches of water and heat on high until boiling.'
    },
    {
      stepName: 'Heat pan for tempeh',
      ingredients: [],
      dependencies: [],
      type: StepsEnum.HEAT,
      duration: 4,
      instructions: 'Fill a large pot with 3 inches of water and heat on high until boiling.'
    },

    {
      stepName: 'Cook noodles',
      ingredients: [
        { id: 'buckwheatSobaNoodles', measurement: '1 package' }
      ],
      dependencies: ['Boil water'],
      type: StepsEnum.COOK_STIRRING,
      duration: 7,
      instructions: 'Add noodles to boiling water and cook for $duration minutes.'
    },
    {
      stepName: 'Drain noodles',
      ingredients: [],
      dependencies: ['Cook noodles'],
      type: StepsEnum.PREP,
      duration: 2,
      instructions: 'Pour noodles into a sieve and rinse with cold water.'
    },

    {
      stepName: 'Cook onions and garlic',
      ingredients: [
        { id: 'oliveOil', measurement: '1 tbsp' }
      ],
      dependencies: ['Heat pan for vegetables', 'Prep onions and garlic'],
      type: StepsEnum.SAUTEE,
      duration: 8,
      instructions: 'Add oil to pain. Add onions and garlic. Cook, stirring occasionally, until slightly browned.'
    },
    {
      stepName: 'Cook mushrooms',
      ingredients: [],
      dependencies: ['Prep mushrooms', 'Cook onions and garlic'],
      type: StepsEnum.SAUTEE,
      duration: 10,
      instructions: 'Add mushrooms and a splash of water to pan. Cook until they have shrunken significantly.'
    },
    {
      stepName: 'Add soy sauce to mushrooms',
      ingredients: [
        { id: 'soySauce', measurement: '1 tbsp' }
      ],
      dependencies: ['Cook mushrooms'],
      type: StepsEnum.SAUTEE,
      duration: 2,
      instructions: 'Add soy sauce to mushrooms, stir, and continue to cook.'
    },
    {
      stepName: 'Cook broccolini',
      ingredients: [],
      dependencies: ['Prep broccolini', 'Add soy sauce to mushrooms'],
      type: StepsEnum.SAUTEE,
      duration: 4,
      instructions: 'Add broccolini and a splash of water to the pan to deglaze it. Cover and cook.'
    },
    {
      stepName: 'Add spinach',
      ingredients: [],
      dependencies: ['Cook broccolini', 'Prep spinach'],
      type: StepsEnum.SAUTEE,
      duration: 2,
      instructions: 'Add spinach, stir, and cover. After 2 minutes, remove from the heat.'
    },

    {
      stepName: 'Cook tempeh',
      ingredients: [
        { id: 'sesameOil', measurement: '1 tbsp'}
      ],
      dependencies: ['Prep tempeh', 'Heat pan for tempeh'],
      type: StepsEnum.SAUTEE,
      duration: 10,
      instructions: 'Add oil to pan, then add tempeh. Halfway through cooking, stir and loosely flip.'
    },
    {
      stepName: 'Add soy sauce to tempeh',
      ingredients: [],
      dependencies: ['Cook tempeh'],
      type: StepsEnum.SAUTEE,
      duration: 2,
      instructions: 'Add soy sauce and toss. Continue to cook, then remove from heat.'
    },

    {
      stepName: 'Combine and serve',
      ingredients: [],
      dependencies: [
        'Add soy sauce to tempeh',
        'Add soy sauce to mushrooms',
        'Add spinach',
        'Drain noodles',
        'Slice ginger',
        'Prep green onions'
      ],
      type: StepsEnum.SAUTEE,
      duration: 4,
      instructions: 'Add broccolini and a splash of water to the pan to deglaze it. Cover and cook.'
    },
  ]
};
