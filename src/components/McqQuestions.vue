<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>welcome to quiz</h2>
    <div v-for="item in questions" :key="item.index">
       {{item.q}}
    
    <div v-for="ans in item.options" :key="ans.index">
        <input type="radio"  :value="ans" v-model="item.ans"/>{{ans}}
        <!-- <p v-if="item.ans===item.correct" result1++></p> -->


    </div>
    
    
   
    </div>
     
    <!-- <input type="submit" value="Submit"/> -->
    <!-- <p>{{result1}}</p> -->
  </div>

</template>

<script>
//import QuizWord from './components/QuizWord.vue'

export default {
    name:'McqQuestions',
    props:{
        msg:String
    },
    data() {
        return {
            result1:0,
            questions:[
                  {
                    q : "1.The common element which describe the web page, is ?",
                    options: ["heading",
                    "paragraph",
                    "All of these",],
                    index:"1",
                    correct:"All of these",
                    ans:''
                    },
                    {
                        q : "2.HTML stands for?",
                        options:["Hyper Text Markup Language",
                        "High Text Markup Language",
                        "Hyper Tabular Markup Language",],
                        index:"2",
                        correct:"Hyper Text Markup Language",
                        ans:''
                    },
                    {
                        q: "3.which of the following tag is used to mark a begining of paragraph ?",
                        options :[ "TD",
                        "br",
                        "P",],
                        index:"3",
                        correct:"P",
                        ans:''
                    },
                    {
                        q : "4.From which tag descriptive list starts ?",
                        options :[ "LL",
                        "DL",
                        "DD",],
                        index:"4",
                        correct:"DL",
                        ans:''
                    },
                    {
                        q: "5.Correct HTML tag for the largest heading is _____",
                        options:[ "h1",
                        "h6",
                        "heading",],
                        correct:"h1",
                        index:"5",
                        ans:''
                    }
            ]

        }


    },
    methods:{
        submit1:function(){
            for(let i of this.questions){
                console.log(i)
                if(i.ans===i.correct){
                    this.result1=this.result1+1
                }
            }
            return this.result1
        }
    }
}


</script>