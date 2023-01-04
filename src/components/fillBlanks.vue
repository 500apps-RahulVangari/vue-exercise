<template>

  <div class="fillBlanks" id="fillBlanks">
    <h2>SECTION 1) Fill in The Blanks</h2> 
      <div v-for="item in fillBlankArray" :key=item.id>{{item.question}}
        <input type="text"   v-model='item.fillBlank'/>{{fillBlank}} 
      </div>
      <obj_C/>
    <b-button to="/mcq" variant="outline-secondary" > Next </b-button>
  </div>

</template>

<script>

import obj_C from './ques.js';
export default {
  name: 'fillBlanks',
  components:{obj_C},
  data() {
    return {
      fillBlankArray:obj_C[0],
      value:"",
      Result2:0,
      fillBlank:""
    };
  },
  methods: {
    GettingOutput() {
      this.Result2 = 0;
      this.fillBlankArray.forEach((each) => {
        if (each.fillBlank === each.correctAnswer) {
          this.Result2 = this.Result2 + 1;
        }
        return this.Result2;
      })
    },
  },
};
</script>
<style>
#fillBlanks {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #01080e;
  margin-top: 10px;
  background-color: orange;
}
</style>