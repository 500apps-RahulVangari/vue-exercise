<template>

  <div id="mcqCode" clas="mcqCode">
    <h2>SECTION 2) Multipile choice questions</h2> 
      <div v-for="each in mcqOptionArray" :key="each.id"><p>{{ each.question }}</p>
        <div v-for="mcqOption in each.options" :key="mcqOption.id">
          <input type="radio" :value="mcqOption" v-model="each.mcqOption">{{ mcqOption }}
        </div>
      </div>
    <b-button to="/Check" variant="outline-secondary" > Next </b-button>
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
      mcqOptionArray:obj_C[1],
      Result1 : 0,
      value:"",
      mcqOption:""
    };
  },
  methods: {
    GettingOutput() {
      this.Result1 = 0
      this.mcqOptionArray.forEach((item) => {
        if (item.mcqOption === item.correctAnswer) {
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
  color: #01080e;
  margin-top: 10px;
  background-color: lightgreen;
  background-size: cover;
}
</style>
