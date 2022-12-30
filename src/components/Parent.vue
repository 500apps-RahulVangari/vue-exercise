<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> HOME page view<br>
    Child1<br>
     Child2<br>
      Child3
    </p>
    <div >
    <!-- <MCQ :mcq=Mcq />
    <FILL :fill=Fill />
    <MS :msmcq=Ms /> -->
    </div>
    <h3>Start from MCQ</h3>
    <!-- <div id='div'>
    <button class="bttn" v-on:click='submit'>Submit</button> &nbsp;&nbsp;
    <input class='result' placeholder="Result 15" size="5" v-model="result"/>
    </div> -->
    
  </div>
</template>

<script>
// import MCQ from '../components/Child1.vue';
// import FILL from '../components/Child2.vue';
// import MS from '../components/Child3.vue';
// import M from "./json.js";
// import F from "./json.js"
// import S from "./json.js";
export default {
  name: 'ParenT',
  components:{
    // MCQ,
    // FILL,
    // MS
  },
  props: {
    msg: String
  },
  // data() {
  //   return {
  //     Fill:F,
  //      Ms:S,
  //      Mcq:M,
  //      result: '',
  //   }
  //}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>