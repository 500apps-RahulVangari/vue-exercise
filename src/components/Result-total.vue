<template>
    <div id="app">
    
      <!-- <MCQ  ref="mcq"/>
      <Blanks ref="blanks"/> -->
    
      <button class="btn-submit" @click="submitEl">Submit</button>
  
      <p class="score-text">Score : {{ score }}</p>
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
        
        this.$refs.MCQ.buttonEl();
        
        this.$refs.Blanks.buttonEl();
      
        this.score=this.$refs.MCQ.score+this.$refs.Blanks.score;

        console.log(this.score)
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
    /* background-color:rgb(146, 139, 126); */
    padding-left: 50px;
    height:100vh;
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
    border-radius: 20px;
    height: 50px;
    width:150px;
  }
  .score-text{
      font-size: 25px;
      color:black;
      font-weight:bold;
  }
  
  </style>