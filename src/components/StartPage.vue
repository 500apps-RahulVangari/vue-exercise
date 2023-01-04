
<template>
    <div class="Start" id="Start">
      <b-col align-self="center"><h4>Click on start button to go to Exam</h4></b-col>
     <h4>This quiz contains 3 rounds </h4>
     <h4>MCQS, BLANKS, CHECKBOX TYPE QNS</h4>
     <h4>Each question carries 2 Marks</h4>
     <h1>All The Best </h1>
     <b-button to="/McqTest" variant="success" > start </b-button>     
    </div>
  </template>
  <script>
  
  export default {
    name: 'StartPage',
    data() {
      return {
        value:"",
        score:""
      
      };
    },
    methods:{
     
      
    }
  };
  </script>
  <style>
  #Start {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #74304a;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  