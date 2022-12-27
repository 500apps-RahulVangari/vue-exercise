<template>
  <div id="app">
    <McqQuestions ref="child1" />

    <FillBlanks ref="child2" />

    <button type="submit" value="Submit" @click="submit>Submit</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import FillBlanks from "./components/FillBlanks.vue";

import McqQuestions from "./components/McqQuestions.vue";

export default {
  name: "App",

  components: {
    McqQuestions,

    FillBlanks,
  },
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    submit() {
      //event.preventDefault();
      this.$refs.child1.submit();
      this.$refs.child2.submit();
      this.result = this.$refs.child1.result1 + this.$refs.child2.result2;
      return this.result;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: #2c3e50;

  margin-top: 60px;
}
</style>
