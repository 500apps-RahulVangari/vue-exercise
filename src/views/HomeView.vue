<template>
  <div id="home" >
    <h1 >click on the button to start  exam</h1>
 
    <b-button to="/startPage" variant="success" > click Here </b-button>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style>
#home {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 align-items:center;
 /* background-color:pink; */
 height:100vh;
}
</style>

