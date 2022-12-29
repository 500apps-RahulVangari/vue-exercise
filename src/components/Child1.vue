<template>
  <div>
 <fieldset >
      <div v-for="(data, position) in multiplequstions" :key="position">
        {{ data.question }}
        <div v-if="show_options">
          <div v-for="(data1, position1) in data.options" :key="position1">
            <input
              type="radio"
              :name="data.question"
              :value="data1"
              v-model="data.given_answer"
            />
            <label for="Chennai">{{ data1 }}</label>
          </div>
        </div>
        <div v-else>
          {{ data.given_answer }}
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {},
  data() {
    return {
      multiplequstions: [
        {
          question: "What is the capital of India?",
          options: ["Hyderabad", "Chennai", "Delhi","Mumbai"],
          given_answer: "",
          correct_answer: "Delhi",
        },
        {
          question: "What is the national animal of India?",
          options: ["Tiger", "Lion", "Cat","Elephant"],
          given_answer: "",
          correct_answer: "Tiger",
        },
        {
          question: "When india got the freedom?",
          options: ["1950", "1947", "1948","1945"],
          given_answer: "",
          correct_answer: "1947",
        },
      ],
      value: 0,
      show_options: true,
    };
  },
  methods: {
    submit() {
      this.multiplequstions.forEach((element) => {
        if (element.correct_answer == element.given_answer)
          this.value = this.value + 1;
      });
      this.show_options = false;
    },
  },
};
</script>