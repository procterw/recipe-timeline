<template>
  <form>
    <ul>
      <li v-for="option in sortOptions" v-bind:key="option">
        <input
          type="radio"
          :name="option"
          :id="option"
          :checked="option === sort"
          v-on:click="() => handleSortChange(option)"
        />
        <label :for="option">
          {{ option }}
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
import { getAvailableRecipes } from '../../api/mockApi.js';

export default {
  props: {
    sort: String,
    handleSortChange: Function,
  },
  data () {
    return {
      sortOptions: [
        'branchDepth', 'startTime'
        // {
        //   id: 'flow',
        //   name: 'Branch depth' ,
        //   description: ''
        // },
        // {
        //   id: 'time',
        //   name: 'Time',
        //   description: 'sort all steps from all recipes by start time'
        // }
      ],
    };
  }
};
</script>

<style>

</style>
