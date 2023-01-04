<template>
    <div class="home">
      <!-- <C/>
      <QuestionBox/> -->
      <!-- <h1>>{{ msg }}</h1> -->
      
      <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <!-- <b-button variant=" danger" ><router-link to='/blanks'>submit&displayresult</router-link></b-button> -->
      <!-- <p>your total result is..</p> -->
      <button @click="sum">click on result</button>
      <!-- <b-button variant=" danger" ><router-link to='/'>Refresh</router-link></b-button> -->
      <b-button to="/" variant="danger" > Refresh</b-button>
      <!-- <b-button variant="danger" href="">Refresh</b-button> -->
      <h1>your total result is..{{ result }}</h1> 
      <div id="m">
        <QuestionBox ref="child1"/>
        <FillBlanks ref="child2"/>
        <CheckBox1 ref="child3"/>
      </div>
      
      <!-- <C/> -->
      <!-- <QuestionBox/> -->
      
    </div>
  </template>
  
  <script>

  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  // import C from './json.js'
   import QuestionBox from '../components/QuestionBox.vue';
   import FillBlanks from '../components/FillBlanks.vue';
   import CheckBox1 from '../components/CheckBox1.vue';
  
  export default {
    
    name: 'ResultPage',
    components: {
    //   C,
    QuestionBox,
    FillBlanks,
    CheckBox1,
    },
    data(){
      return{
      result:0,
    };
  },
    methods: {
    sum() {
      this.result = 0;
      this.$refs.child1.sum1();
      this.$refs.child2.sum2();
      this.$refs.child3.sum3();
      this.result = this.$refs.child1.result1 + this.$refs.child2.result2+this.$refs.child3.result3;
      return this.result;
      
    },
    }
  }
  </script>
  <style>
  #m {
    visibility: hidden;
  }
</style>
  