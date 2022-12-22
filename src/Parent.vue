<template>
  <div id="app">
    <!-- Marks should be shown here -->
    <Child1 />
    <Child2 />
    <!-- Your Submit Code and  -->
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'Main',
  components: {
    Child1,Child2
  }
  // Your Code for Submiting the anwsers
}
</script>

<style>

</style>
