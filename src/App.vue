<template>
  <div id="app">
    <McqQns ref="mcq" />

    <FillInBlanks ref="blanks" />

    <div><button id="button" @click="validateForm">submit</button></div>

    <h4>
      total score:
      <h2>{{ score }}</h2>
    </h4>
  </div>
</template>

<script>
import McqQns from "./components/McqQns.vue";

import FillInBlanks from "./components/FillInBlank.vue";

export default {
  name: "App",

  components: {
    McqQns,

    FillInBlanks,
  },

  data() {
    return {
      score: 0,
    };
  },

  methods: {
    validateForm() {
      this.score = 0;
      this.$refs.mcq.validate();

      this.$refs.blanks.validate();

      this.score = this.$refs.mcq.score + this.$refs.blanks.score;
      return this.score;
    },
    // reset() {
    //   this.score = 0;
    //  return this.score;
    // },
  },
};
</script>

<style>
#app {
  background-color: aquamarine;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: left;

  color: #2c3e50;

  margin-top: 60px;
}

#btn {
  background-color: lightblue;

  margin: 5px;
}
#button {
  background-color: green;
  margin: 5px;
}
</style>
