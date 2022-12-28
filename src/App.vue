<template>
  <div id="app">
    <h1>Quiz Application</h1>
    <h2>Below are the Quiz Questions 4 MCQ's and 2 Fill in the Blanks</h2>
    <p>If you click the next mcq button it will navigate to another question</p>
    <h3>If the question is Correct it will add +1 otherwise -1</h3>
    <MCQ ref="mcq"/>
    <button class="btn-next" @click="buttonEl">Next Mcq Question</button>
    <Blanks ref="blanks"/>
    
    
    <button class="btn-submit" @click="submitEl">Submit</button>

    <p class="score-text">Score : {{ score }}</p>
  </div>
</template>

<script>
import Blanks from './components/child-one.vue'
import MCQ from './components/child-two.vue'

export default {
  name: 'App',
  components: {
    MCQ,Blanks,
  },
  data(){
    return{
      score:0,
    }
  },
  methods:{
    buttonEl(){
      this.$refs.mcq.buttonEl();
      this.$refs.mcq.score;
      
    },
    submitEl(){
      this.$refs.blanks.buttonEl();
      this.score=this.$refs.mcq.score+this.$refs.blanks.score;
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:orange;
  padding-left: 50px;
  height:100vh;
  padding-top:30px;
}
.btn-next{
  background-color:black;
  font-weight:bold;
  font-size:15px;
  color:white;
  border-radius: 20px;
  height: 50px;
  width:150px;
}
.btn-submit{
  background-color:green;
  font-weight:bold;
  font-size:20px;
  color:white;
  border-radius: 20px;
  height: 50px;
  width:150px;
}
.score-text{
    font-size: 25px;
    color:black;
    font-weight:bold;
}

</style>
