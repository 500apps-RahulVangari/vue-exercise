<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>welcome to quiz</h2>
    <div v-for="item in questions" :key="item.id">
       {{item.q}}
       <!-- <p v-if="item.correct===item.ans">{{result2}}</p> -->
       <!-- {{result2}} -->
       <input type="text" value="" v-model="item.ans" />{{ ans }}

    </div>
     
    <!-- <input type="submit" value="Submit"/>
    <p>{{result2}}</p> -->
  </div>

</template>

<script>
//import QuizWord from './components/QuizWord.vue'

export default {
    name:'FillBlanks',
    props:{
        msg:String
    },
    data() {
      
        return {
               result2:0,
            questions:[
                  {
                    q : "1.The common element which describe the web page, is ?",
                    correct:"Heading",
                    ans:''
                    },
                    {
                        q : "2.HTML stands for?",
                        correct:"Hyper Text Markup Language",
                        ans:''
                    },
                    {
                        q: "3.which of the following tag is used to mark a begining of paragraph ?",
                        correct:"P",
                        ans:''
                    },
                    {
                        q : "4.From which tag descriptive list starts ?",
                        correct:"DL",
                        ans:''
                    },
                    {
                        q: "5.Correct HTML tag for the largest heading is _____",
                        correct:"h1",
                        ans:''
                    }
            ]

        }

    },
    methods:{
       submit() {
      this.result2 = 0;
      this.questions.forEach((item) => {
        if (item.ans === item.correct) {
          this.result2 = this.result2 + 1;
        }
      });
      return this.result2;
    },
    }

    

}


</script>
