<template>
    <div class="hello">
        <h3>fill in the blanks</h3>
        <div v-for="(item,index) in blanksItems" :key="index">
    {{ item.question1 }} <input type="text"  v-model="item.given_ans" v-if="show_blanks"/>
    <span v-else>
                {{ item.given_ans }}
    </span>
    {{ item.question2 }}
   </div>
    </div>
  </template>
  <script> 
  export default {
    name: "HelloWorld",
    props: {
      
    },
    data() {
        return {
        blanksItems:[
          {
            question1:"1.In a classroom student are to be trained to love",
            question2:"",
            given_ans:"",
            correct_ans:"one another"
           },
           {
            question1:"2.It took the child a long time to recover",    
            question2:"the shock.",     
            given_ans:"",
            correct_ans:"from"
           },
           ],
    score:0,
    show_blanks:true,
    };
    },
     methods:{
         submit_answer1(){
            this.score=0;
            this.blanksItems.forEach(element => {
                if(element.correct_ans==element.given_ans)
                this.score=this.score+2
           });
           this.show_blanks=false
          },
          reset1(){
          for (let x of this.blanksItems){
                    x.given_ans=""
                  }
          this.show_blanks = true;
          },
       
       }
  };
  </script>