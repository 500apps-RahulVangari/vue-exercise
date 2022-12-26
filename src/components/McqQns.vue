<template>
  <div id="mcqni">
    <h1>FUN QUIZ</h1>
    <p>Fill out this quiz for fun!</p>
    <hr />
    <div v-for="item in title" :key="item.id">
      <p>{{ item.question }}</p>
      <div v-for="answer in item.answers" :key="answer.id">
        <input type="radio" :value="answer" v-model="item.answer" />{{ answer }}
      </div>
    </div>
    <!-- {{ score1 }} -->
  </div>
</template>

<script>
export default {
  name: "McqQns",
  
  data() {
    return {
      score1: this.score,
      title: [
        {
          question: "1.What can you catch but cannot throw?",
          answers: ["Your toys", "A cold", "A tennis ball", "A boomerang"],
          correctAnswer: "A cold",
          index: "one",
          answer: "",
        },
        {
          question:
            "2.Pick me up and scratch my head. Ill turn red and then black. What am I?",
          answers: ["None of the above", "Caterpillar", "Candle", "A match"],
          correctAnswer: "A match",
          index: "two",
          answer: "",
        },
        {
          question: "3.What has a foot but no legs ?",
          answers: ["Slug", "Snail", "Mosquito", "Nothing"],
          correctAnswer: "Snail",
          index: "three",
          answer: "",
        },
        {
          question: "4.What has hands, but can’t clap?",
          answers: ["Glove", "Clock", "Nothing", "None of the above"],
          correctAnswer: "Clock",
          index: "four",
          answer: "",
        },
        {
          question: "5.What is the capital of India?",
          answers: ["Delhi", "Hyderabad", "Mumbai", "Punjab"],
          correctAnswer: "Delhi",
          index: "five",
          answer: "",
        },
      ],

      value: "",
    };
  },

  methods: {
    validateForm() {
      this.score1 = 0;

      for (let i of this.title) {
        if (i.answer === i.correctAnswer) {
          this.score1 = this.score1 + 1;
         
        }
      }
    
      return this.score1;
    },
    refresh(){
                for (let i of this.title){
                  i.answer=""
                }
              this.score1=0
            }
  },
};
</script>
