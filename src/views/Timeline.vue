<template>
  <div class="timeline-view">
    <button v-on:click="sortByStartTime">Sort by start time</button>
    <button v-on:click="sortByFlow">Sort by flow</button>
  </div>
</template>

<script>
import { RecipeTimeline } from '../vis/RecipeTimeline';
import { getRecipesTimeline } from '../api/mockApi.js';

const routerStore = {
  debug: true,
  state: {
    route: '#'
  },
}

export default {
  data () {
    return {
      // recipes: [
      //   'tempeh'
      // ],
      recipes: [
        'rice',
        'tofu',
        'greens'
      ],
      recipeTimeline: null
    }
  },
  mounted: function () {
    this.recipeTimeline = new RecipeTimeline(this.$el, []);
    this.sortByStartTime();
  },
  methods: {
    sortByStartTime: async function() {
      const data = await getRecipesTimeline(this.recipes, 'time');
      this.recipeTimeline.setSteps(data);
    },
    sortByFlow: async function() {
      const data = await getRecipesTimeline(this.recipes, 'flow');
      this.recipeTimeline.setSteps(data);
    }
  }
}
</script>

<style>

</style>
