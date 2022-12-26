<template>

    <div id="blank">
    <div v-for = "data in questions " :key="data.id">{{ data.qns }}
        <input type="text"   v-model="data.userAns" >
      </div>
    
    </div>
    
    </template>
    
    <script>
    
    
    export default {
    
    name: 'BlanksTest',
    data (){
    return{

      res2:0,
  
      questions:[
        {qns:"5.What is the national Bird of india?",correctAns:"peacock", index:1, userAns:""},
        {qns:"6.Which Hand shows hours in a clock ?", correctAns:"short hand",index:2, userAns:""},
        {qns:"7.How many seconds in a minute ?", correctAns:"60",index:3,  userAns:""},
        {qns:"8.How many rings are present in Olympic logo ?", correctAns:"5",index:4,  userAns:""},
        

    ],
    value:"",
      
      
    }
  },
    methods:{
      finalOutput(){
        this.res2=0;
       this.questions.forEach((item)=>{
        
          if(item.userAns === item.correctAns ) {
            this.res2 = this.res2+1;
            
        }  
         return this.res2;
        })
      }
    }
    
}
        
    </script>