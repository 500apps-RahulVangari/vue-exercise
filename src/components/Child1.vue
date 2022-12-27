<template>
  <div>
    <h3>Multiple choice questions</h3>
    <form>
      <div v-for="(item, index) in multipleItems" :key="index">
        {{ item.question }}
        <div v-if="show_options">
          <div v-for="(option, index1) in item.options" :key="index1">
            <input
              type="radio"
              :name="item.question"
              :value="option"
              v-model="item.given_ans"
            />
            <label for="Facebook">{{ option }}</label>
          </div>
        </div>
        <div v-else>
          {{ item.given_ans }}
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      multipleItems: [
        {
          question: "1.Which company invented Vue.js?",
          options: ["Facebook", "Google", "Oracle"],
          given_ans: "",
          correct_ans: "Google",
        },
        {
          question:
            "2.Which of the following directive is used for two-way binding in Vue.js?",
          options: ["v-on", "v-model", "v-bind"],
          given_ans: "",
          correct_ans: "v-model",
        },
      ],
      score: 0,
      show_options: true,
    };
  },

  methods: {
    submit_answer() {
      this.score = 0;
      this.multipleItems.forEach((element) => {
        if (element.correct_ans == element.given_ans)
          this.score = this.score + 2;
      });
      this.show_options = false;
    },
    reset() {
      for (let x of this.multipleItems){
                  x.given_ans=""
                }
      this.show_options = true;
    },
  },
};
</script>
