<template>
    <div>
        <C/>  
      <h2>Multiple Choice Question</h2>

    <div class ='mcq' v-for="i in questions" :key="i.id">{{ i.q }}
    <div v-for="ans in i.options" :key="ans.id">
       <input type="radio" :value="ans" v-model="i.ans" />{{ ans }}
      </div>
    </div>

    <button @click="submit">Submit</button>
    <p>{{ result1 }}</p>
     <b-button variant="outline-primary"><router-link to="/blanks">Next</router-link></b-button>|
        </div>
</template>
<script>
import C from './json.js';
export default{
    name:"MCQPage",
     components:{
        C
    },
    data(){
        return {
            questions:C[0],
            result1:0
        }
    },
    methods: {
    submit() {
      this.result1 = 0;
      this.questions.forEach((i) => {
        if(i.ans === i.correct) {
          this.result1 = this.result1 + 1;
        }
      });
      return this.result1;
    },
  },
}
</script>