<template>
    <div id="checkbox">
      <!-- <h1>QUIZ</h1> -->
      <h2>select multiple answers..</h2><br /><br /> 
      <p>Choose the correct answers below</p><br />
      <obj />
      <!-- <totalQns/> -->
      <div v-for="i in questions" :key="i.id">
        <p>{{ i.q}}</p>
        <div v-for="j in i.options" :key="j.id" >
          <b-form-checkbox  :value="j" v-model="i.ans" >{{j }} </b-form-checkbox>   
    </div></div>
      <!-- <footer>
        
        <b-button to="/resultPage">submit</b-button> 
       
      </footer>
     -->
     <button @click="sum3">Submit</button> 
       <p>result {{ result3 }}</p>  
       <!-- <b-button variant=" danger" ><router-link to="/result">diaplay result</router-link></b-button> -->
       <b-button to="/result" variant="danger" > displayresult </b-button>
</div>
     
  </template>


  <script>
  import obj from './json';
// import totalQns from './json';
      export default {
        components: {  obj },
      name: 'CheckBox1',
      
      data(){
          return{
            result3:0,
            questions:obj[2],
           // value:"",
            
          }
      },
      methods:{
          sum3(){
            
              this.result3=0;
              this.questions.forEach((item)=>{
              
                // console.log("userAns--->",this.userAns)
               if( JSON.stringify(item.ans)===JSON.stringify(item.correct))  {
                // console.log("1111111111111")
                  this.result3=this.result3+1;
                
              }
            
                  return this.result3;
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
  