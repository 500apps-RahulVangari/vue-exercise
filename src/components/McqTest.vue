<template>
  <div id="mcqs">
    <h1>QUIZ</h1>
    <h1>Multiple choice Questions</h1>
    <hr />
    <totalQns/>
    <div v-for="data in questions" :key="data.id">
      <p>{{ data.q}}</p>
      <div v-for="userAns in data.options" :key="userAns.id">
        <input type="radio" :value="userAns" v-model="data.userAns" />{{ userAns }}
        
      </div>
    </div>
    <!-- <b-button @click="$router.push({path: '/BlanksTest'})">Next</b-button> -->
    <div id="next"><b-button to="/BLANKSTest">Next </b-button></div>
    
  </div>


   
</template>
<script>
import totalQns from './json';
    export default {
      components: { totalQns },
    name: 'McqTest',
   // props:{questions:Array,},
    
    data(){
        return{
          res1:0,
          questions:totalQns[0],
          value:""
       
        }
    },
    methods:{
        finalOutput(){
            this.res1=0;
            this.questions.forEach((item)=>{
             if( item.userAns===item.correct )  {
        
                this.res1=this.res1+1;


            }
                return this.res1;
        })
       }
    }
};
</script>
<style>
#mcqs{
  color:rgb(48, 3, 26);
  background-color: aquamarine;
}


</style>


