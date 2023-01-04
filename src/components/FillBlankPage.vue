<template>
    <div>
        <h1> Fill in the blanks Page</h1>
        <div v-for="item in value" :key=item.index>{{item.q}}
         <input type="text"  v-model='item.ans'/>{{ans}}
    <C/>
        </div>
    <button @click="submit">Submit</button>
    <p>{{ result2 }}</p>
        <b-button variant="outline-primary"><router-link to="/checkbox">Next</router-link></b-button>|
    
</div>
</template>
<script>
import C from './json.js';
export default{
    name:"FillBlankPage",
    components:{
        C,
    },
    data(){
        return{
            value:C[1],
            result2:0
        }
    },
    methods: {
   submit() {
      this.result2 = 0;
      this.value.forEach((i) => {
        if(i.ans === i.correct) {
          this.result2 = this.result2 + 1;
        }
      });
      return this.result2;
    },
  },

}
</script>
