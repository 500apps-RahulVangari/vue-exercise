<template>
  <div id="app">
    <mcqCode msg="Multipile Choice Questions" ref="output1"/>
     <fillBlanks msg="Fill in the Blanks" ref="output2"/>
     <button @click="GettingOutput()">submit</button>
     <p>{{Result}}</p>
     
  </div>
</template>

<script>
import mcqCode from './components/mcqCode.vue'
import fillBlanks from './components/fillBlanks.vue'
export default {
  name: 'App',
  components: {
    mcqCode,fillBlanks
  },
  data(){
  return {
  Result:0,
  }
  },
  methods:{
  GettingOutput(){
  this.Result=0;
    this.$refs.output1.GettingOutput()
    this.$refs.output2.GettingOutput()
    this.Result=this.$refs.output1.Result1+this.$refs.output2.Result2
    },
},

};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#btn {

background-color: lightblue;

}

</style>
