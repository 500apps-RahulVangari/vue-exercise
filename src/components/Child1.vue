<template>
    <div id='mcq'>
     <br>
    
     <!-- Multiple choice Questions  related code-->
      <h2 >Multiple Choice Ques.</h2>
        <div class ='mcq' v-for="i in MCQ" :key="i.id">{{ i.Q }}<br>
        <div style="display: inline-block ;" v-for="ans in i.options" :key="ans.id">
           <input type="radio" :value="ans" v-model="i.ans" />{{ ans }}&nbsp;&nbsp;
          </div>
        </div>
    </div>
    </template>
    <script>
    import c from "./json.js";
    export default {
     name:'MCQ',
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
      margin-left: 37%;
      margin-right: 37%;
      background-color: rgba(81, 128, 19, 0.336);
      margin-top: 20px;
      justify-content: center;
     
    } 
    .mcq{
      padding: 4%;
      text-align: left;
      margin-left: 17%;

    }
    /* h2{
      margin-left: 2%;
      color: rgba(29, 150, 65, 0.377);
    } */
    </style>