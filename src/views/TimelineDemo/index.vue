<template>
  <div class="layout-wrapper">
    <section class="layout-side-panel">

      <h3>Recipe timeline</h3>
      <p>
        The recipe timeline combines the steps from multiple recipes and lays them out as 
        a timeline. Each step is labeled as <em>passive</em> (baking, simmering), <em>active</em>
        (prep, kneading), or <em>semi-active</em> (sautéing, frying). Click on a step to see the 
        ingredients and full instructions.
      </p>

      <h3>Recipes</h3>
      <recipe-selection
        v-bind:selectedRecipes="selectedRecipes"
        v-bind:handleRecipeToggle="handleRecipeToggle"
      />

      <h3>Step sorting</h3>
      <sort-options
        v-bind:sort="sort"
        v-bind:handleSortChange="handleSortChange"
      />
    </section>
    <section class="timeline-wrapper layout-content-with-side-panel">
      
    </section>
  </div>
</template>

<script>
import { RecipeTimeline } from '../../vis/RecipeTimeline';
import { getRecipesTimeline } from '../../api/mockApi.js';
import RecipeSelection from './RecipeSelection.vue';
import SortOptions from './SortOptions.vue';

export default {
  components: {
    'recipe-selection': RecipeSelection,
    'sort-options': SortOptions
  },
  data () {
    return {
      recipeTimeline: null,
      selectedRecipes: [],
      sort: 'branchDepth',
    }
  },
  mounted: function () {
    this.recipeTimeline = new RecipeTimeline(
      this.$el.querySelector('.timeline-wrapper'),
      [] // no initial data
    );
  },
  methods: {
    handleRecipeToggle: async function(recipe) {
      const index = this.selectedRecipes.indexOf(recipe);
      if (index < 0) {
        this.selectedRecipes.push(recipe);
      } else {
        this.selectedRecipes.splice(index, 1);
      }

      const data = await getRecipesTimeline(this.selectedRecipes, this.sort);
      this.recipeTimeline.setSteps(data);
    },
    handleSortChange: async function(sort) {
      this.sort = sort;

      const data = await getRecipesTimeline(this.selectedRecipes, this.sort);
      this.recipeTimeline.setSteps(data);
    }
  }
}
</script>

<style>
form ul {
  list-style: none;
  padding: 0;
}

p {
  margin-top: 0;
}
</style>
