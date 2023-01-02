<template>
  <div class="text bg-mcq">
    <div class="text">
        <h1>Mulitple Choice Questions</h1>
        <p>There are 4 MCQ's in this section <br/>For Correct Answer it will Add +1 otherwise -1</p>
            <div>
                <h2 class="head text">{{ currentQuestion.question}}</h2>
                <ul>
                    <li v-for="(answer, index) in currentQuestion.answers" :key="index">
                    <input type="radio"  :value="answer" v-model="selectedAnswer">
                            {{ answer }}
                    </li>
                </ul>
            <button @click="nextQuestion" class="next">Next Mcq Question</button>

            </div>
    </div>
  </div>
</template>     
<script>
export default {
  name: 'ChilDone',
  data() {
      return {
          questions: [
              {
                  question: '1. What is the capital of France?',
                  answers: ['Paris', 'London', 'New York', 'Tokyo'],
                  correctAnswer: 'Paris'
              },
              {
                  question: '2. What is the largest planet in our solar system?',
                  answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
                  correctAnswer: 'Jupiter'
              },
              {
                  question: '3 .Who is the First Prime Minister',
                  answers: ['LalBahadur Sastry', 'BhagatSingh', 'Jawaharlal Nehru', 'PV Narasimha Rao'],
                  correctAnswer: 'Jawaharlal Nehru'
              },
              {
                  question: '4. What is the capital of India?',
                  answers: ['Kolkata', 'Mumbai', 'Delhi', 'Hyderabad'],
                  correctAnswer: 'Delhi'
              }
          ],
          currentQuestionIndex:0,
          selectedAnswer:'',
          output:'',
          score:0,
      }
  },
  computed:{
      currentQuestion(){
          return this.questions[this.currentQuestionIndex];
      }
  },
  methods:{
      buttonEl(){
          if(this.selectedAnswer==this.currentQuestion.correctAnswer){
              this.score+=1;
              console.log(this.score);
          }
          else{
              this.score-=1;
              return this.emit("score",this.score)
          }
          this.selectedAnswer='';
      },
      nextQuestion(){
        this.currentQuestionIndex++;
      },
  }
}
</script>

<style>
  .text{
      text-align:center;
      padding-top:10px;
  }
  .head {
      font-size: 30px;
      color:black;
      font-family:"Roboto";
  }
  
  .next{
    background-color: brown;
    height:60px;
    width:180px;
    font-weight: bold;
    color:white;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size:20px;
  }
  .bg-mcq{
    background-color:rgb(107, 144, 152);
    background-size:cover;
    height:50vh;
  }
  ul{
    list-style-type: none;
  }
</style>
