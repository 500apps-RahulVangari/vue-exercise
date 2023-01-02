<template>
  <div id="App">
    <nav>
     <router-link to ='/StartPage' ref ="StartPage"></router-link>
      <b-button to="/StartPage" variant="success" > refresh </b-button> 
       <!-- <b-button @click="refresh" to="/StartPage" variant="success" > refresh</b-button>  -->
      <!-- <input type="button" value="Reload Page" onClick="reload"></input> -->
        <router-link to="/McqTest"  ref = "child1"/> 
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
    methods:{
     
    }
   
}
  


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #384e64;
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







