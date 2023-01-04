<template>
    <div id="checkbox">
      <!-- <h1>QUIZ</h1> -->
      <h1>Checkbox type Questions</h1>
      <h4>You should Select multiple options</h4>
      <hr />
      <totalQns/>
      <div v-for="data in questions" :key="data.id">
        <p>{{ data.qns}}</p>
        <div v-for="userAns in data.options" :key="userAns.id" >
          <b-form-checkbox  :value="userAns" v-model="data.userAns" >{{userAns }} </b-form-checkbox>   
    </div></div>
      <footer>
        
        <b-button to="/resultPage">submit</b-button> 
       
      </footer>
    
</div>
     
  </template>
  <script>
  import totalQns from './json';
      export default {
        components: { totalQns },
      name: 'CheckBoxs',
      
      data(){
          return{
            res3:0,
            questions:totalQns[2],
            value:"",
            
          }
      },
      methods:{
          finalOutput(){
            
              this.res3=0;
              this.questions.forEach((item)=>{
              
                // console.log("userAns--->",this.userAns)
               if( JSON.stringify(item.userAns)===JSON.stringify(item.correctAns))  {
                // console.log("1111111111111")
                  this.res3=this.res3+2;
                
              }
            
                  return this.res3;
          })
         }
      }
  };
  </script>
   <style>
   #checkbox {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
  
  