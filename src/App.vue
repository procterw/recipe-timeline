<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
const routerStore = {
  debug: true,
  state: {
    route: '#'
  },
}

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>