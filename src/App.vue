<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/InstructionsView"><button class="homebtn">Home</button></router-link>  
        <router-link to="/multipleChoiceQuestions"><button class="mcqbtn">MCQ</button></router-link>  
        <router-link to="/fillInTheBlanks"><button class="fbbtn">FB</button></router-link>  
        <router-link to="/resultsView"><button class="resultbtn">Results</button></router-link>
      </div>
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  background-size:cover;
  margin-right: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.homebtn{
  font-size: 25px;
  color:white;
  font-weight:bold;
  background-color: black;
  height: 40px;
  width:100px;
  margin-right:20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.mcqbtn{
  font-size: 25px;
  color:white;
  font-weight:bold;
  background-color: rgb(224, 27, 86);
  height: 40px;
  width:100px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-right:20px;
}
.fbbtn{
  font-size: 25px;
  color:white;
  font-weight:bold;
  background-color: rgb(54, 27, 45);
  height: 40px;
  width:100px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-right:20px;
}
.resultbtn{
  font-size: 25px;
  color:white;
  font-weight:bold;
  background-color: green;
  height: 40px;
  width:100px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}


</style>
