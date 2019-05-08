<template>
  <form>
    <ul>
      <li v-for="recipe in availableRecipes" v-bind:key="recipe">
        <input
          type="checkbox"
          :name="recipe"
          :id="recipe"
          :checked="selectedRecipes.includes(recipe)"
          v-on:click="() => handleRecipeToggle(recipe)"
        />
        <label :for="recipe">
          {{ recipe }}
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
import { getAvailableRecipes } from '../../api/mockApi.js';

export default {
  props: {
    selectedRecipes: Array,
    handleRecipeToggle: Function,
  },
  data () {
    return {
      availableRecipes: [],
    };
  },
  mounted: async function () {
    this.availableRecipes = await getAvailableRecipes();
    this.handleRecipeToggle(this.availableRecipes[0]);
  }
};
</script>

<style>

</style>
