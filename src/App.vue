<template>
  <div id="app">
   
    <McqQns  :score="score" ref="mcq" />
    <BlanksQns  :score="score" ref="blanks" />

    <button @click="validateForm()" :class="btn-submit">submit</button>
      <button @click="refresh()">refresh</button>
    <h4>{{ score }}</h4>
  </div>
</template>

<script>
import McqQns from "./components/McqQns.vue";
import BlanksQns from "./components/BlanksQns.vue";

export default {
  name: "App",

  components: {
    McqQns,
    BlanksQns,
  },
  data() {
    return {
      score: 0,
    };
  },
  methods: {
    validateForm() {
      // console.log("score--->", this.$refs);
      this.$refs.mcq.validateForm();
      this.$refs.blanks.validateForm();
      this.score = this.$refs.mcq.score1 + this.$refs.blanks.score2;
    },
    refresh(){
         this.$refs.mcq.refresh();
      this.$refs.blanks.refresh();
      this.score=0
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  
}

</style>
