<template>

    <div class="StartPage" id="StartPage">
      <h1 >Let's Start the Exam</h1>
      <div>
      <nav ><router-link to="/fill">Start</router-link> </nav>
      
    </div>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'StartPage',
    data() {
      return {
      };
    },
  };
  </script>
  <style>
 
  #StartPage {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    background-color: yellow;
  }
  </style>