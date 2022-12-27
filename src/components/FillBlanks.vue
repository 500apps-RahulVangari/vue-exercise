<template>
  <div id="app">
    <h2>Fill the correct answer below</h2>
    <p v-for="item in questions" :key="item.index">
      {{ item.Question }}

      <input type="text" v-model="item.answer" />
    </p>
  </div>
</template>

<script>
export default {
  name: "FillBlanks",
  props: "result",

  data() {
    return {
      result2: 0,

      questions: [
        {
          Question: "1.enter value of 2+3 :",
          option: "5",
          answer: "",
        },
        {
          Question: "2.enter value of 2-3 :",
          option: "-1",
          answer: "",
        },
        {
          Question: "3.enter value of 8/2 :",
          option: "4",
          answer: "",
        },
        {
          Question: "4.enter value of 2*3 :",
          option: "6",
          answer: "",
        },
      ],
    };
  },
  methods: {
    sum2() {
      this.result2 = 0;
      for (let i of this.questions) {
        if (i.answer === i.option) {
          this.result2 = this.result2 + 1;
        }
      }
      return this.result2;
    },
  },
};
</script>
