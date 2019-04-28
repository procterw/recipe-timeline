export const StepsEnum = {
  HEAT: { id: 'heat', involvement: 0 }, // passive
  REST: { id: 'rest', involvement: 0 },
  PREP: { id: 'prep', involvement: 1 }, // active
  SAUTEE: { id: 'sautee', involvement: 0.5 }, // semi-active?
  COOK_STIRRING: { id: 'cookStirring', involvement: 0.5 },
  SIMMER: { id: 'simmer', involvement: 0 },
  BOIL: { id: 'boil', involvement: 0 },
  BAKE: { id: 'bake', involvement: 0 },
  ROAST: { id: 'roast', involvement: 0 },
  SEAR: { id: 'sear', involvement: 0.5 },
  COMBINE: { id: 'combine', involvement: 1 },
};
