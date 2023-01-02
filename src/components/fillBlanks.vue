<template>

  <div class="fillBlanks" id="fillBlanks">
        <h1>Fill in The Blanks</h1> 
         <div v-for="ite in valu" :key=ite.id>{{ite.question}}
        <input type="text"   v-model='ite.blank'/>{{blank}} 
  </div>
<obj_C/>
    <router-link to="/mcq">Next</router-link> 
</div>
</template>

<script>
import obj_C from './ques.js';
export default {
  name: 'fillBlanks',
  components:{obj_C},
  data() {
    return {
      valu:obj_C[0],
      value:"",
      Result2:0,
      blank:""
    };
  },
  methods: {
    GettingOutput() {
      this.Result2 = 0;
      this.valu.forEach((each) => {
        if (each.blank === each.correctAnswer) {
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
  color: #2c3e50;
  margin-top: 10px;
  background-color: orange;
}
</style>