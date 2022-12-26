<template>
  <div id="blank">
    <h1 :style="mainh"><b>Fill In The Blanks</b></h1>
    <p><q>each question carries 5 marks</q></p>
    <div id="data">
      <div v-for="item in fib" :key="item.id">
        <p>{{ item.question }}</p>
        <input id="input" type="text" value="answer" v-model="item.answer" />
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "FillInTheBlanks",

  data() {
    return {
      fib: [
        {
          question: "Props are used to pass down data to the ..",
          ans: "child components",
          answer: "",
        },
        {
          question: " How many ways are there to define a filter in Vue.js?",
          ans: "2",
          answer: "",
        },
        {
          question: "What is the correct full form of MVVM?",
          ans: "Model-View-View Model",
          answer: "",
        },
        {
          question: "method does not represent the non-mutation?",
          ans: "Reverse() Method",
          answer: "",
        },
        {
          question: " which keyword is used to create constant in Vue.js",
          ans: "const",
          answer: "",
        },
      ],
      value: "",
      score: 0,
      mainh: {
        color: "red",
      },
    };
  },

  methods: {
    validate: function () {
      this.score = 0;
      for (let ans of this.fib) {
        if (ans.answer === ans.ans) {
          this.score = this.score + 5;
        }
      }

      return this.score;
    },
  },
};
</script>
<style>
#data {
  text-decoration-color: blueviolet;
  background: rgb(210, 236, 90);
}
</style>
