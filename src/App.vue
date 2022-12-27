<template>
  <div id="app">
    <QuestionBox msg="welcome to quiz" ref="child1" />
    <FillBlanks msg="Fill in the blanks" ref="child2" />
    <p>Total Marks : {{ result }}</p>
    <button @click="submit" :class="btn - submit">submit</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import FillBlanks from "./components/FillBlanks.vue";
//import HelloWorld from './components/HelloWorld.vue'
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "App",
  components: {
    QuestionBox,
    FillBlanks,
  },
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    submit() {
      this.result = 0;
      this.$refs.child1.sum1();
      this.$refs.child2.sum2();

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
  background-color: darkcyan;
}
</style>



