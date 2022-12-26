
<template>

  <div id="app">
  

  
  <McqTest ref = "child1"/>
  
  <BlanksTest ref = "child2"/>

  <button @click="finalOutput">submit</button>

  <h1> {{ score }}</h1>


  </div>
  </template>
  <script>
  import McqTest from './components/McqTest.vue'
  
  import BlanksTest from './components/BlanksTest.vue'

  export default {
  
  name: "App",
  
  components: {
  
  McqTest,BlanksTest

  },
  
  data(){
    return{
      score:0,
    }
    
  },
  methods: {
    finalOutput(){
      
      this.$refs.child1.finalOutput();
      this.$refs.child2.finalOutput();
      this.score=this.$refs.child1.res1 + this.$refs.child2.res2;
     
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
