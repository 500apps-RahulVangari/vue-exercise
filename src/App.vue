<template>
  <div id="app">
    <h1>Quiz</h1>
    <MCQ ref="child1" />
    <Fill ref="child2" />

    <div id='div'>
    <button class="bttn" v-on:click='submit'>Submit</button> &nbsp;&nbsp;
    <input class='result' placeholder="Result" size="1.5" v-model="result"/>
    </div>
    
  </div>
</template>

<script>
import MCQ from "./components/HelloWorld.vue";
import Fill from "./components/fill.vue";

export default {
  name: "App",
  components: {
    MCQ,
    Fill,
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
#app{
  background-color: rgb(164, 224, 219);
}
#div{
  margin-top: 2%;
  margin-left: 42%;
}

h1{
   margin-left: 42.5%;
   color: blueviolet;
}
.bttn ,.result{
  background-color: rgb(112, 241, 107);
  text-align: center;
}

</style>