<template>
  <div id="app">
    <!--<QuestionBox msg="Welcome to Your QuestionBox"/>
    <FillBlanks msg="Welcome to Your FillBlanks"/>-->
    <QuestionBox msg="welcome to quiz" ref="child1"/>
  <FillBlanks msg="Fill in the blanks" ref="child2"/>
    <button @click="submit()" :class="btn-submit">submit</button>
    <p>Result : {{ result }}</p>
   
  </div>
  
</template>

<script>
import FillBlanks from './components/FillBlanks.vue';
//import HelloWorld from './components/HelloWorld.vue'
import QuestionBox from './components/QuestionBox.vue';

export default {
  name: 'App',
  components: {
   
    QuestionBox,
    FillBlanks
  },
  data(){
    return{
        result:0,
      }
    },
  methods:{
      submit(){
        this.$refs.child1.submit();
        this.$refs.child2.submit();
        
        this.result=this.$refs.child1.result1+this.$refs.child2.result2;
        return this.result;
      },

    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: #2c3e50;
  margin:unset;
  background-color:darkcyan;
  
}
</style>



