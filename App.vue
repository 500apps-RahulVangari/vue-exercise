<template>
  <div id="App">
    
    <nav>
      
      <!-- <b-button @click="refresh" variant="danger" type="Reset">refresh</b-button> -->
      
     <!-- <router-link to ='/StartPage' ref ="StartPage"/> -->
     <b-button to="/McqTest" variant="success" > start </b-button>

      <h1 >click on the button to start  exam</h1>
     
      <!-- <b-button variant="/startPage" @click="refresh">Refresh</b-button> -->
      <!-- <McqTest :questions="questions"/> -->
       <!-- <router-link to="/McqTest"  ref = "child1"/> -->
      
    
    </nav>
    <router-view/>
  </div>
</template>
<script>


export default {
    name: "App",
    data() {
        return {
            score: 0,
            value: "",
        };
    },
  
}


</script>
<style>
#app {
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










<!-- <template>
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
  </style> -->
