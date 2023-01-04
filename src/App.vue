<template>
  <div id="App">
<!--     
   <nav> -->
      
      <!-- <b-button @click="refresh" variant="danger" type="Reset">refresh</b-button> -->
      
     <!-- <router-link to ='/StartPage' ref ="StartPage"/> -->
     <!-- <b-button to="/startPage" variant="success" > start </b-button> -->

      <!-- <h1 >click on the button to start  exam</h1> -->
     
      <!-- <b-button variant="/startPage" @click="refresh">Refresh</b-button> -->
      <!-- <McqTest :questions="questions"/> -->
       <!-- <router-link to="/McqTest"  ref = "child1"/> -->
      
<!--     
    </nav> -->
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










