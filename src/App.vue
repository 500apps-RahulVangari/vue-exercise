<template>
  
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <header><h1>Quiz Application </h1></header>
    <nav id="nav">
     <button> <router-link to="/">Home</router-link>  </button>&nbsp;&nbsp;
      <button> <router-link to="/mcq">MCQ</router-link> </button>&nbsp;&nbsp;
      <button> <router-link to="/fill">FILL</router-link> </button>&nbsp;&nbsp;
      <button> <router-link to="/ms">MS</router-link> </button>&nbsp;&nbsp;
      <button> <router-link to="/submit">SUBMIT</router-link> </button>&nbsp;&nbsp;
    </nav>
    <router-view/>
    <footer id="foot">
      <button @click="pri()">Privious</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="next()">Next</button>
      
    </footer>
   
  </div>
  
</template>
<script>

export default {

  name: "App",
  data() {
    return {
      result: '',
    
    };
  },
   methods: {
    next(){
      this.$router.forward();

    },
    pri(){
      this.$router.back();
    }
   
  },
  }
</script>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2069b1;
   padding: 5%;
}
#foot{
  margin-top:2%;
}
nav a {
  margin-top: 4%;
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
} 
</style>