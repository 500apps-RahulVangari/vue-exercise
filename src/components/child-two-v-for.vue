<template>
    <div class="text">
        
        <h2 class="head">{{ currentQuestion.question}}</h2>
        <ol>
            <li v-for="(answer, index) in currentQuestion.answers" :key="index">
            <input type="radio"  :value="answer" v-model="selectedAnswer">
                    {{ answer }}
            </li>
        </ol>
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
            }
            this.selectedAnswer='';
            this.currentQuestionIndex++;
            
        }
    }
}
</script>

<style>
    .text{
        text-align:left;
    }
    .head {
        font-size: 30px;
        color:black;
        font-family:"Roboto";
    }
</style>
