<template>
  <div class="full-step-view">
    <section class="ingredients">
      <h3>ingredients</h3>
      <ul v-if="ingredients.length > 0">
        <li
          v-for="ingredient in ingredients"
          v-bind:key="ingredient.name"
        >
          {{ ingredient.name }}
        </li>
      </ul>
    </section>
    <section class="instructions">
      <h3>Instructions</h3>
      <p>{{ instructions }}</p>
    </section>
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
  .full-step-view {
    font-family: 'Libre Baskerville', serif;
    background: #fff8ea;
    border-bottom: 1px solid wheat;
    border-top: 1px solid wheat;
    margin-top: 1px;
  }

  .full-step-view section {
    display: inline-block;
    vertical-align: top;
    padding: 5px;
  }

  .full-step-view h3 {
    margin: 0 0 5px;
    font-size: 15px;
    text-transform: capitalize;
    font-weight: normal;
    font-style: italic;
  }

  .full-step-view ul {
    list-style: none;
    padding: 0;
    font-size: 13px;
  }

  .full-step-view p {
    font-size: 13px;
    margin: 0;
  }

</style>
