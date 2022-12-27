<template>
  <div id="app">
    <h2>Mantra's Fun quiz</h2>
    <br />
    <h2>Answer the following questions</h2>

    <div v-for="item in questions" :key="item.index">
      {{ item.Question }}

      <div v-for="answer in item.options" :key="answer.id">
        <input type="radio" :value="answer" v-model="item.answer" />{{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionBox",
  props: {
    msg: String,
  },

  data() {
    return {
      result1: 0,

      questions: [
        {
          Question: "1.what is vue js ?",
          options: ["frontend framework", "backend framework"],
          correct: "frontend framework",
          answer: "",
        },
        {
          Question: "2.what is javascript ?",
          options: ["scripting Language", "High level Language"],
          correct: "scripting Language",
          answer: "",
        },
        {
          Question: "3.what is java ?",
          options: ["High level Language", "low level Language"],
          correct: "High level Language",
          answer: "",
        },
        {
          Question: "4.which language is platform independent ?",
          options: ["javascropt", "java"],
          correct: "java",
          answer: "",
        },
      ],
    };
  },

  methods: {
    sum1() {
      this.result1 = 0;
      //for (let i of this.questions) {
      this.questions.forEach((i) => {
        console.log(i);
        if (i.answer === i.correct) {
          this.result1 = this.result1 + 1;
        }
      });
      return this.result1;
    },
  },
};
</script>
