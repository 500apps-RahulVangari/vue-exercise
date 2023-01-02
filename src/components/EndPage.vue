<template>
    <div class="EndPage" id="EndPage">
      <h1> Your score is  :</h1>
      <b-button @click = "GettingOutput"  variant="outline-primary">Score</b-button>
      <p>{{ Result }}</p>
      <nav><b-button variant="danger"><router-link to="/Start">Refresh</router-link></b-button> </nav>
      <div id = "hid">
      <mcqCode ref="child1" />
      <fillBlanks ref="child2" />
      </div>
    </div>
  </template>
  
  <script>
   import fillBlanks from './fillBlanks.vue';
   import mcqCode from './mcqCode.vue';
  export default {
    name: "EndPage",
    components:{fillBlanks,mcqCode},
    data() {
        return {
          Result : 0,
        };
    },
    methods: {
        GettingOutput() {
            this.Result = 0;
            this.$refs.child1.GettingOutput();
            this.$refs.child2.GettingOutput();
            this.Result = this.$refs.child1.Result1 + this.$refs.child2.Result2;
            return this.Result;
        },
    },
    
};
  </script>
  <style>
  #EndPage {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  #hid{
    visibility: hidden;
  }
  </style>