<template>
  <div id="app">
    <h1>QUIZ</h1>
    <Child1 ref="multiple" />
    <Child2 ref="blanks" />
    <br>
    <button type="reset" @click="resetForm"><b>reset</b></button>
    <button @click="validateForm"><b>submit</b></button>
    <h3>Marks:{{ score }}</h3>
  </div>
</template>
<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
export default {
  name: "App",
  components: {
   Child1,
   Child2,
  },
  data() {
    return {
      show_options: true,
      score: 0,
    };
  },
  methods: {
    validateForm() {
      this.$refs.multiple.submit_answer();
      this.$refs.blanks.submit_answer1();
      this.score = this.$refs.multiple.score + this.$refs.blanks.score;
    },

    resetForm() {
      this.score=0;
      this.$refs.multiple.reset();
      this.$refs.blanks.reset1();
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  margin-top: 60px;
}
</style>
