<template>
    <div id='msmcq'>
     <h2>Multi select</h2>
     <div class ='mcq' v-for="i in ms" :key="i.id">{{ i.Q }}<br>
        <div style="display: inline-block ;" v-for="j in i.options" :key="j.id">
          <b-form-checkbox :value="j" v-model="i.ans">{{ j }}&nbsp;&nbsp;&nbsp;</b-form-checkbox>
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
  
    };
  },
  methods: {
    submit3: function () {
      for(let i of this.ms){
        console.log((i.ans),i.Ans)
        if (JSON.stringify(i.ans) === JSON.stringify(i.Ans)) {
          this.result3 = this.result3 + 3;
        }
      }
    }
    
  }
}
</script>
    
    <style >
#msmcq {
   margin-left: 37%;
      margin-right: 37%;
      background-color: rgba(81, 128, 19, 0.336);
       margin-top: 20px;
}
.msmcq {
  padding: 3%;
}
h2 {
  margin-left: 2%;
  color: rgba(206, 15, 15, 0.712);
}
</style>