<template>
    <div id="mcqs">
      <h1>QUIZ</h1>
      <h1>Multiple choice Questions</h1>
      
      <hr />
      <totalQns/>
      <div v-for="data in questions" :key="data.id">
        <p>{{ data.qns}}</p>
        <div v-for="userAns in data.options" :key="userAns.id">
          <b-form-radio :value="userAns" v-model="data.userAns">{{ userAns }}</b-form-radio>
        </div>
      </div>
    
      <b-button to="/BlanksTest">Next </b-button>
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
            value:"",
          }
      },
      methods:{
          finalOutput(){
              this.res1=0;
              this.questions.forEach((item)=>{
                console.log("he------>",this.userAns)
               if( item.userAns===item.correctAns )  {
          
                  this.res1=this.res1+2;
  
              }
                  return this.res1;
          })
         }
      },
      reset()
  {
    for (let i of this.totalQns){
        console.log("hiiiiiii")
      i.userAns=null
    }
    this.score=0
    this.value=""
  }

  };
  </script>
  <style>
   #mcqs {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
  