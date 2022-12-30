<template>
    <div id='mcq'>
     <br>
    
     <!-- Multiple choice Questions  related code-->
      <h2>Multiple Choice Question</h2>
    
        <div class ='mcq' v-for="i in MCQ" :key="i.id">{{ i.Q }}
        <div v-for="ans in i.options" :key="ans.id">
           <input type="radio" :value="ans" v-model="i.ans" />{{ ans }}
          </div>
        </div>
    </div>
    </template>
    <script>
    import c from "./json.js";
    export default {
     name:'MCQ',
    //  props:{
    //     mcq:Array
        
    //  },
     data() {
        return {
          MCQ:c[0],
          result1: 0,
         
          
        };
      },
      methods: {
        submit1: function() {
          for (let i of this.MCQ) {
              if (Number(i.ans) === Number(i.Ans)) {
              this.result1 = this.result1 + 1;
            }
          }
        },
      },
     
    }
    </script>
    
    <style >
    #mcq{
      margin-left: 35%;
      margin-right: 40%;
      background-color: rgba(81, 128, 19, 0.336);
     margin-top: 20px;
    } 
    .mcq{
      padding: 3%;
    }
    /* h2{
      margin-left: 2%;
      color: rgba(29, 150, 65, 0.377);
    } */
    </style>