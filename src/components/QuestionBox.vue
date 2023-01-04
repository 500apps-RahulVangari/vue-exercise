<template>
  <div>
    <obj />
    <h2>Multiple Choice Question</h2><br /><br />
    <p>Choose the correct option below</p><br />
    <div class="mcq" v-for="i in questions" :key="i.id">{{ i.Question }}
      <div v-for="answer in i.options" :key="answer.id">
        <input type="radio" :value="answer" v-model="i.answer" />{{ answer }}
      </div>
    </div>
    <!-- <button @click="sum1">Submit</button> 
    <p>result {{ result1 }}</p> -->
    <!-- <b-button variant=" danger" ><router-link to="/blanks">nextpage</router-link></b-button> -->
    <b-button to="/blanks" variant="danger" > nextpage </b-button>
    <!-- <b-button variant="danger" href="/blanks">next page</b-button> -->
    </div>
    </template>
    <script>
    import obj from "./json.js";
    export default {
      name: "QuestionBox",
      components: {
        obj,
      },
      data() {
        return {
          questions: obj[0],
          result1: 0,
        };
      },
      methods: {
        sum1() {
          this.result1 = 0;
          this.questions.forEach((i) => {
            if (i.answer === i.correct) {
              this.result1 = this.result1 + 1;
            }
          });
          return this.result1;
        },
      },
      };
      </script>
