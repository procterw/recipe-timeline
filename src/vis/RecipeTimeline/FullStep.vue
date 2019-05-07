<template>
  <div class="full-step-view">
    <ul v-if="ingredients.length > 0">
      <li
        v-for="ingredient in ingredients"
        v-bind:key="ingredient.name"
      >
        {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    ingredients: Array,
    instructions: String,
  },
};
</script>

<style>

</style>
