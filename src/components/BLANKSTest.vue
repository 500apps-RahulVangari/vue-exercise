<template>
  <div id="blank">
    <h1>Fill in the blanks</h1>
    <hr />
    <totalQns />
    <div v-for="data in question" :key="data.id">
      {{ data.q }}
      <input type="text" v-model="data.userAns" />
    </div>
    <footer>
      <b-button to="/resultPage">submit</b-button>
      <!-- <b-button to="/BlanksTest">Next </b-button> -->
      {{ score }}
    </footer>
  </div>
</template>

<script>
import totalQns from "./json";

export default {
  components: {
    totalQns,
  },
  name: "BlanksTest",
  // props:{question:Array},
  data() {
    return {
      res2: 0,
      question: totalQns[1],
      value: "",
    };
  },

  methods: {
    finalOutput() {
      this.res2 = 0;
      this.question.forEach((item) => {
        if (item.userAns === item.correct) {
          this.res2 = this.res2 + 1;
        }
        return this.res2;
      });
    },
  },
};
</script>
<style>

#blank{
  color:rgb(48, 3, 26);
  background-color: aquamarine;
}


</style>
