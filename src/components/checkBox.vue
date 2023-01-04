<template>

  <div class="checkBox" id="checkBox">

      <h2>SECTION 3)Fill in The checkBox</h2> 
        <div v-for="item of checkOptionArray" :key=item.id><p>{{item.question}}</p>
          <div v-for="checkOption of item.options" :key="checkOption.id">
            <b-form-checkbox  :value="checkOption"  v-model='item.checkOption' >{{checkOption}} </b-form-checkbox>
          </div>
        </div>
      <obj_C/>
    <b-button to="/End" variant="outline-secondary"> submit </b-button>
  </div>
</template>

<script>
import obj_C from './ques.js';
export default {
  name: 'checkBox',
  components:{obj_C},
  data() {
    return {
        checkOptionArray:obj_C[2],
        value:"",
        Result3:0,
        checkOption:[]
      };
  },
  methods: {
    GettingOutput() {
      this.Result3 = 0
      this.checkOptionArray.forEach((item) => {
        if (JSON.stringify(item.checkOption)  === JSON.stringify(item.correctAnswer)) {
          this.Result3 = this.Result3 + 1;
        }
  
        return this.Result3;
      })
    }
  }
};</script>
<style>
#checkBox {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #01080e;
  margin-top: 10px;
  background-color: lightblue;
}
</style>