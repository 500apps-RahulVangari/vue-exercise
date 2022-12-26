<template>
  <div id="app">
    
    <h2>Mantra's Fun Quiz</h2>
    <br>
    <h2>Answer the following questions</h2>
    <div v-for="item in questions" :key="item.index">
      {{ item.Question }}
      <div v-for="answer in item.options" :key="answer.index">
        <input type="radio" :value="answer" v-model="item.answer" />
        {{ answer }}
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  name:'QuestionBox',
 
  data() {
    return {
      result1:0,
      

      questions:[
        {
          "Question" : "1.what is vue js ?",
          options:[ "frontend framework","backend framework"],
          correct:"frontend framework",answer:"",

          },
          {
            "Question" : "2.what is javascript ?",
            options:["scripting  Language","High level Language"],
             correct:"scripting language",answer:""
             
             },
             {
              "Question" : "3.what is java ?",
              options :[ "High level Language","low level Language"],
               correct:"High level language",answer:""
               
               },
               {
                "Question" : "4.which language is platform independent ?",
                options :[ "javascropt","java"],
                 correct:"java",answer:""
                 
                 }
                 ],
                
              value:"",   
        };
    },
    
   
      methods:{
       submit(){
        for(let i of this.questions){
          if(i.answer===i.correct){
          this.result1=this.result1+1;
         }        
          
        }
        return this.result1;
      },
     


      }
    }
   



                
</script>
