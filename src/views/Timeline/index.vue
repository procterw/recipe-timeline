<template>
  <div class="timeline-view">
    <!-- <button v-on:click="sortByStartTime">Sort by start time</button> -->
    <!-- <button v-on:click="sortByFlow">Sort by flow</button> -->
    <section class="timeline-options">

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
    <section class="timeline-wrapper">

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
      sort: 'flow', // flow, time
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
  .timeline-view {
    display: flex;
  }

  .timeline-wrapper {
    flex-grow: 1;
    padding: 10px 40px;
    box-sizing: border-box;
  }
</style>
