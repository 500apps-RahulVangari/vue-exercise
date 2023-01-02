<template>
    <div class="bg text">
        <div>
            <h1>Fill in The Blanks</h1>
            <p>There are 4 Fill in the Blank's in this section <br/>For Correct Answer it will Add +1 otherwise -1</p>
        </div>
        
        <p v-for="(item, index) in questions" :key="index">
            {{ item.question }}
            <input type="text" v-model="selectedAnswer[index]" />
        </p>
        <!-- <button @click.prevent="buttonEl()">submit</button>
        
        <p>
            score : {{ score }}
        </p> -->
    </div>
</template>    
<script>
export default {
    name: 'QuizZ',
    data() {
        return {
            questions: [
                { question: '5.Who is the Back-Bone of our India ?', answer: 'farmer' },
                { question: '6.Who killed Mahatma Gandhi ?', answer: 'godse' },
                {question : '7.What is the current president of India?',answer:'draupadi murmu'},
                {question : '8.Who is the CM of Telangana?',answer:'kcr'},
            ],
            selectedAnswer: [],
            score: 0
        }
    },
    methods: {
        buttonEl() {
            for (let i = 0; i < this.questions.length+1; i++) {
                if (this.selectedAnswer[i] === this.questions[i].answer){
                    return this.score = this.score + 1;
                    
                }
                
                else {
                   return this.score = this.score - 1;
                }
            }

        },
    }
}
</script>
    
    
<style>
.text {
    text-align:center;
}

.head {
    font-size: 20px;
    color: black;
    font-family: "Roboto";
    font-weight:bold;
}

.Wrongoutput {
    color: red
}

.Correctoutput {
    color: green
}

.input-size {
    height: 25px;
    width: 200px;
    border-radius: 20px;

}
.bg{
    background-color: rgb(213, 199, 182);
    background-size: cover;
    height:35vh;
}
</style>
