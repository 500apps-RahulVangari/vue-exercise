<template>
<fieldset>
        <div v-for="(data,position) in blanks" :key="position">
    {{ data.question1 }} 
    <input v-if="show_blanks" type="text"  v-model="data.given_answer"/>
    <span v-else>
            {{ data.given_answer }}
    </span>
   </div>
</fieldset>
  </template>
  <script> 
  export default {
    name: "App",
    props: {},
    data() {
        return {
        blanks:[
          {
            question1:"Narendra modi is the prime minister of",
            given_answer:"",
            correct_answer:"India"
           },
           {
            question1:"Mantra is located at",
            given_answer:"",
            correct_answer:"Hyderabad"
           },
           ],
    value:0,
    show_blanks:true,
    };
    },
     methods:{
         submit1() {
            this.blanks.forEach((data) => {
                if(data.correct_answer==data.given_answer)
                this.value=this.value+1
           });
           this.show_blanks=false
          },
       }
  };
  </script>