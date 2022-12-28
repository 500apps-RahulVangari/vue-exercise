<template>
  <div id="app">
    <nav>
      <!-- <h1>QUIZ</h1>
    <Child1 ref="multiple" />
    <Child2 ref="blanks" />
    <br>
    <button type="reset" @click="resetForm"><b>reset</b></button>
    <button @click="validateForm"><b>submit</b></button>
    <h3>Marks:{{ score }}</h3> -->

      <!-- added a new route to our app.vue file// -->
       <router-link to="/Child1"> Multiple</router-link>
       <router-link to="/Child2"> blanks</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<script>
// import Child1 from "./components/Child1.vue";
// import Child2 from "./components/Child2.vue";
export default {
  name: "App",
  // components: {
  //   Child1,
  //   Child2,
  // },
  // data() {
  //   return {
  //     show_options: true,
  //     score: 0,
  //   };
  // },
  // methods: {
  //   validateForm() {
  //     this.$refs.multiple.submit_answer();
  //     this.$refs.blanks.submit_answer1();
  //     this.score = this.$refs.multiple.score + this.$refs.blanks.score;
  //   },

  //   resetForm() {
  //     this.score=0;
  //     this.$refs.multiple.reset();
  //     this.$refs.blanks.reset1();
  //   },
  // },
};
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
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
