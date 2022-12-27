<template>
  <div id="mcqs">
    <h1>QUIZ</h1>
    <hr />
    <div v-for="data in questions" :key="data.id">
      <p>{{ data.qns }}</p>
      <div v-for="userAns in data.options" :key="userAns.id">
        <input type="radio" :value="userAns" v-model="data.userAns" />{{ userAns }}
    
      </div>
    </div>
  </div>
</template>
<script>
    export default {
    name: 'McqTest',
    data(){
        return{
            questions:[
                {
        qns :"1.How many weeks are in a year?",
        options:[ 50, 53, 52, 51],
        correctAns: 52,
        index:1,userAns:""
        },
        {
        qns:"2.Which colour symbolises peace?",
        options:["white","green","orange","blue"],
        correctAns:"white",
        index:2,userAns:""
        },
        {
        qns:"3.If you have a bowl with six apples and you take away four, how many do you have?",
        options:[6, 4, 0, 2],
        correctAns:4,
        index:3,userAns:""
        },
        {
        qns:"4. How many dots appear on a pair of dice?",
        options:[42, 41, 24, 22],
        correctAns:42,
        index:4,userAns:""
        }
     ],
        res1:0,

           value:""

        }
    },


    methods:{
        finalOutput(){
            this.res1=0;
            this.questions.forEach((item)=>{
    
             if( item.userAns===item.correctAns )  {
                this.res1=this.res1+1;
                
            }

                return this.res1;
        })

        }
    }

};
</script>
