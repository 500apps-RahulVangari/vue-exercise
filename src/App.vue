<template>

  <div>
    <nav>
      <b-button to="/Start" variant="outline-success" > Start </b-button>
    </nav>
  <router-view />
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #01080e;
  margin-top: 10px;
}
#btn {
  background-color: lightblue;
}
nav {
  padding: 30px;
  text-align: center;
}
</style>
