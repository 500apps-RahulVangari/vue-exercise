<template>
      <div id="app" class="bg-result">
        <button class="btn-submit" @click="submitEl">Submit</button>
        <p class="score-text">Score : {{ score }}</p>
      <div id="visiblity">
      
        <MCQ  ref="mcq"/>
        <Blanks ref="blanks"/> 
    </div>
    </div>
  </template>
  <script src="https://unpkg.com/vue-router"></script>
  <script>
  
  import Blanks from './child-one.vue'
  import MCQ from './child-two.vue'
  
  export default {
    name: 'ResultView',
    components: {
      MCQ,Blanks,
    },
    data(){
      return{
        score:0,
      }
    },
    methods:{
      submitEl(){
        this.$refs.mcq.score,
        this.$refs.blanks.score,
        this.score=this.$refs.mcq.score+this.$refs.blanks.score
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
    padding-left: 50px;
    height:20vh;
    padding-top:30px;
  }
  .btn-next{
    background-color:black;
    font-weight:bold;
    font-size:15px;
    color:white;
    border-radius: 20px;
    height: 50px;
    width:150px;
  }
  .btn-submit{
    background-color:green;
    font-weight:bold;
    font-size:20px;
    color:white;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 50px;
    width:150px;
  }
  .score-text{
      font-size: 25px;
      color:black;
      font-weight:bold;
  }
  #visiblity{
    visibility: hidden;
  }
  .bg-result{
    background-color: rgb(107, 105, 109);
    height:20vh;
  }
  
  </style>
