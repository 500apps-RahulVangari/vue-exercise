<template>
    <div id='msmcq'>
     <h2>Multi select</h2>
     <div class ='mcq' v-for="i in ms" :key="i.id">{{ i.Q }}
        <div v-for="j in i.options" :key="j.id">
           <input type="checkbox" :value="ans" v-model="j.ans" />{{ j }}
          </div> 
        </div> 
    </div>
    </template>
    
    <script>
import c from "./json.js";
export default {
  name: "MS",
  data() {
    return {
      ms: c[2],
      result3: 0,
      selected: [],
    };
  },
  methods: {
    submit3: function () {
      console.log('hello')
      for (let i of this.ms) {
        console.log(i.ans, i.Ans);
        if (Number(i.ans) === Number(i.Ans)) {
          this.result1 = this.result1 + 1;
        }
      }
    },
  },
};
</script>
    
    <style >
#msmcq {
  margin-left: 35%;
  margin-right: 40%;
  background-color: rgba(81, 128, 19, 0.336);
}
.msmcq {
  padding: 3%;
}
h2 {
  margin-left: 2%;
  color: rgba(206, 15, 15, 0.712);
}
</style>