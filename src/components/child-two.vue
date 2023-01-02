<template>
    <div class="text">
        <p class="head" v-for="(item, index) in questions" :key="index">
            {{ item.question }}
            <input type="text" v-model="selectedAnswer[index]" />
        </p>
        
        <!-- <p>
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
                if (this.selectedAnswer[i] === this.questions[i].answer) {
                    return this.score = this.score + 1;
                }
                else {
                    return this.score = this.score - 1;
                }
            }

        }
    }
}
</script>
    
    
<style>
.text {
    text-align: left;
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
</style>