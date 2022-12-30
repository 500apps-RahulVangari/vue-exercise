<template>
    <!-- child2-->
    <div id='fill'>
      <br>
     <!-- Fill in the blanks  related code-->
      <h2>Fill in the Blanks</h2>
        <div class ='fill' v-for="i in Fill" :key="i.index">{{ i.Q }}
          <input class='input' type="Number" placeholder="Enter Answer"  v-model="i.ans"  size="2" />
        </div>
    </div>
    </template>
    
    <script>
    import c from "./json.js";
    export default {
      name : 'FILL',
     data() {
        return {
            Fill : c[1],
          result2: 0
        };
      },
      methods: {
        submit2:function() {
          for (let i of this.Fill) {
            if (Number(i.ans) == i.Ans) {
              this.result2 = this.result2 + 2;
            }
            }  
        },
        
      },
      
    }
    </script>
    
    <style >
    .input{
      text-align: center;
    }
    #fill{
     margin-left: 35%;
      margin-right: 40%;
      background-color: rgba(81, 128, 19, 0.336);
       margin-top: 20px;
    } 
    .fill{
      padding: 3%;
    }
    /* h2{
     margin-left: 2%;
      color: rgba(29, 150, 65, 0.377);
    } */
    </style>