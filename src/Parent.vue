<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld message="Welcome to Your Vue.js App"/> -->
    <Quiz ref="quiz"/>
    <Blanks ref="blanks"/>

    <div>
        <button class="btn" @click="QuizSubmitButton">Submit</button>
        <p class="score">Score : {{ score }}</p>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Quiz from './components/Quiz1.vue'

import Blanks from './components/Quiz2.vue'

export default {
  name: 'App',
  components: {
   Quiz,Blanks
  },
  data(){
    return{
      score:0
    }
  },methods:{
    QuizSubmitButton(){
      this.score=0;
      this.$refs.quiz.QuizSubmitButton();
      this.$refs.blanks.QuizSubmitButton();
      this.score = this.$refs.quiz.score+this.$refs.blanks.score;
    }
  }
}
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
