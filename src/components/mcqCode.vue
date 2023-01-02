<template>

  <div id="mcqCode" clas="mcqCode">
    <h1>Multipile choice questions</h1> 
    <div v-for="each in valu" :key="each.id"><p>{{ each.question }}</p>
      <div v-for="val in each.options" :key="val.id">
        <input type="radio" :value="val" v-model="each.val">{{ val }}
      </div>
    </div>
    <router-link to="/End">Submit</router-link>
    <obj_C/>
  </div>
  
</template>
<script>
import obj_C from './ques.js';

export default {
  name: 'mcqCode',
  components:{obj_C},
  data() {
    return {
      valu:obj_C[1],
      Result1 : 0,
      value:"",
      val:""
    };
  },
  methods: {
    GettingOutput() {
      this.Result1 = 0
      this.valu.forEach((q) => {
        if (q.val === q.correctAnswer) {
          this.Result1 = this.Result1 + 1;
        }
        return this.Result1;
      })
    },
  },
};

</script>

<style scoped>
#mcqCode {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background-color: lightgreen;
  background-size: cover;
}
</style>
