<template>
  <div id="app">
    
      <b-button @click="startPage" variant="outline-primary"><router-link to="/">refresh here</router-link></b-button>|
     
    <router-view/>
    
   
  </div>
</template>

<script>

export default{
  name:"App",
  
  
}


</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d0e12;
  background-color: rgb(201, 191, 193);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #040404;
}

nav a.router-link-exact-active {
  color: #0b0e0d;
}

</style>
