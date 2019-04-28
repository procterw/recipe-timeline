function ingredient(measurement, id, name) {
  return { measurement, id, name };
}

export const ingredientDb = {
  water: (m) => ingredient(m, 'water', 'water'),
  oats: (m) => ingredient(m, 'oats', 'oats'),
  apples: (m) => ingredient(m, 'apples', 'apples'),
  dates: (m) => ingredient(m, 'dates', 'dates'),
  pumpkinSeeds: (m) => ingredient(m, 'pumpkinSeeds', 'pumpkin seeds'),
  walnuts: (m) => ingredient(m, 'walnuts', 'walnuts'),
  cinnamon: (m) => ingredient(m, 'cinnamon', 'cinnamon'),
  rice: (m) => ingredient(m, 'rice', 'rice'),
  garlic: (m) => ingredient(m, 'garlic', 'garlic'),
  kale: (m) => ingredient(m, 'kale', 'kale'),
  broccoli: (m) => ingredient(m, 'broccoli', 'broccoli'),
  oliveOil: (m) => ingredient(m, 'oliveOil', 'olive oil'),
  greens: (m) => ingredient(m, 'greens', 'greens'),
  tofu: (m) => ingredient(m, 'tofu', 'tofu'),
  cornStarch: (m) => ingredient(m, 'cornStarch', 'corn starch'),
  garlicPowder: (m) => ingredient(m, 'garlicPowder', 'garlic powder'),
  gingerPowder: (m) => ingredient(m, 'gingerPowder', 'ginger powder'),
  sesameOil: (m) => ingredient(m, 'sesameOil', 'sesame oil'),
  soySauce: (m) => ingredient(m, 'soySauce', 'soy sauce')
};
