<template>
  <div id="app">
    <!-- <MCQ ref="child1" />
    <FILL ref="child2" />
    <MS ref="child3"/> -->
    <nav>
     <button> <router-link to="/">Home</router-link>  </button>&nbsp;&nbsp;
      <button> <router-link to="/mcq">MCQ</router-link> </button>&nbsp;&nbsp;
      <button> <router-link to="/fill">FILL</router-link> </button>&nbsp;&nbsp;
      <button> <router-link to="/ms">MS</router-link> </button>&nbsp;&nbsp;
      <button> <router-link to="/submit">SUBMIT</router-link> </button>&nbsp;&nbsp;
    </nav>
    <router-view/>
    <!-- <div>
  <footer>
 <h2>Score</h2>
  <div id='div'> 
    <button class="bttn" v-on:click='submit'>Submit</button> &nbsp;&nbsp;
    <input class='result' placeholder="Result" size="1.5" v-model="result">
    </div>
  </footer></div> 
  </div> -->
  </div>
  
</template>
<script>
// import MCQ from './components/Child1.vue';
// import FILL from './components/Child2.vue';
// import MS from './components/Child3.vue';
export default {
  name: "App",
  components: {
    // MCQ,
    // FILL ,
    // MS
  },
  data() {
    return {
      result: '',
    
    };
  },
  methods: {
    submit() {
       
      this.$refs.child1.submit1();
      this.$refs.child2.submit2();
      this.result = this.$refs.child1.result1+this.$refs.child2.result2;
    },
   
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
   padding: 30px
}
/* nav {
  padding: 30px;
} */
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
} 
</style>