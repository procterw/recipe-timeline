<template>
  <div class="timeline-view">
    <!-- <button v-on:click="sortByStartTime">Sort by start time</button> -->
    <!-- <button v-on:click="sortByFlow">Sort by flow</button> -->
    <recipe-selection
      v-bind:selectedRecipes="selectedRecipes"
      v-bind:handleRecipeToggle="handleRecipeToggle"
    />
  </div>
</template>

<script>
import { RecipeTimeline } from '../../vis/RecipeTimeline';
import { getRecipesTimeline } from '../../api/mockApi.js';
import RecipeSelection from './RecipeSelection.vue';

export default {
  components: {
    'recipe-selection': RecipeSelection
  },
  data () {
    return {
      recipeTimeline: null,
      selectedRecipes: [],
      sort: 'flow', // flow, time
    }
  },
  mounted: function () {
    this.recipeTimeline = new RecipeTimeline(this.$el, []);
  },
  methods: {
    // sortByStartTime: async function() {
    //   const data = await getRecipesTimeline(this.recipes, 'time');
    //   this.recipeTimeline.setSteps(data);
    // },
    // sortByFlow: async function() {
    //   const data = await getRecipesTimeline(this.recipes, 'flow');
    //   this.recipeTimeline.setSteps(data);
    // },
    handleRecipeToggle: async function(recipe) {
      const index = this.selectedRecipes.indexOf(recipe);
      if (index < 0) {
        this.selectedRecipes.push(recipe);
      } else {
        this.selectedRecipes.splice(index, 1);
      }

      const data = await getRecipesTimeline(this.selectedRecipes, this.sort);
      this.recipeTimeline.setSteps(data);
    }
  }
}
</script>

<style>

</style>
