<template>
  <div id="app">
    <!-- <Multiple :show_options="show_options" @showmsg="getData"/>
    <Blanks :show_blanks="show_options" @showData="getData"/> -->

    <Child1  ref="uma"/>
    <Child2  ref="rama"/>

    <button @click="validateForm"><h3>submit</h3></button>

    <!-- <button @click="show_options = false" >Submit</button>  -->
    <h1>Marks:{{ score}}</h1>
  </div>
</template>
<script>
import  Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'App',
  components: {
   Child1,
   Child2
    // HelloWorld,Employee
  },
  data() {
    return {
      show_options: true,
      score:0,
    }
  },
  methods:{
    // getData(data){
    //   this.result=0,
    //   this.result=this.result+data
    // }
    validateForm() {
      this.$refs.uma.submit_answer();
      this.$refs.rama.submit_answer1();
      this.score=this.$refs.uma.score+this.$refs.rama.score
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  margin-top: 60px;
}
</style>