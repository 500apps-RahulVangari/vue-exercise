<template>
  <div id="app">
    <nav>
      <router-link to="/InstructionsView"><button>Home</button></router-link>  |
      <router-link to="/multipleChoiceQuestions"><button>MCQ</button></router-link>  |
      <router-link to="/fillInTheBlanks"><button>FB</button></router-link>  |
      <router-link to="/resultsView"><button>Results Tab</button></router-link>
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
  height:100vh;
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

</style>
