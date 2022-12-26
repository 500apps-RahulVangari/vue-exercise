<template>
  <div id="mcqni">
    <h1 :style="mainh"><b>Multiple Choice Questions</b></h1>
    <p><q>each question carries 5 marks</q></p>
    <div id="data">
      <div v-for="item in mcq" :key="item.id">
        <p>{{ item.question }}</p>
        <div v-for="answer in item.answers" :key="answer.id">
          <input type="radio" :value="answer" v-model="item.answer" />
          {{ answer }}
        </div>
      </div>

      <!-- <p>1) Which of the following statement best define Vue.js?</p>
<br><input type="radio" v-model= "option1" value="Vue.js is an open-source JavaScript library that is used for developing user interfaces." >"Vue.js is an open-source JavaScript library that is used for developing user interfaces.<br>
<input type="radio" v-model= "option1" value="Vue.js is an open-source front-end JavaScript framework used for developing user interfaces." >Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.<br>
<input type="radio"  v-model= "option1" value="Vue.js is an open-source, cross-platform, JavaScript run-time situation that performs the JavaScript program outside a web browser.">Vue.js is an open-source, cross-platform, JavaScript run-time situation that performs the JavaScript program outside a web browser.<br>
<input type="radio"  v-model= "option1" value="Vue.js is a JavaScript library constructed to facilitate HTML DOM tree traversal and administration, event handling, CSS activity, and Ajax."></input>Vue.js is a JavaScript library constructed to facilitate HTML DOM tree traversal and administration, event handling, CSS activity, and Ajax.<br>
<br>
<p>2) Why is Vue.js called a progressive framework?</p>
<input type="radio"  v-model="option2" value="Vue.js is called a progressive framework because it is being changed and developed continually.">Vue.js is called a progressive framework because it is being changed and developed continually.<br>
<input type="radio"  v-model="option2" value="Vue.js is called a progressive framework because it facilitates us to create Dynamic User Interfaces and single-page applications." >Vue.js is called a progressive framework because it facilitates us to create Dynamic User Interfaces and single-page applications.<br>
<input type="radio"  v-model="option2" value="Vue.js is called a progressive framework because it follows the latest JavaScript standards.">Vue.js is called a progressive framework because it follows the latest JavaScript standards.<br>
<input type="radio"  v-model="option2" value="All of the above.">/All of the above.<br>
<p>3) Which company invented Vue.js?</p><br>
<input type="radio" v-model="option3" value="Facebook">/Facebook<br>
<input type="radio" v-model="option3" value="Google" >/Google<br>
<input type="radio" v-model="option3" value="Oracle" >/Oracle<br>
<input type="radio" v-model="option3" value="Twitter">/Twitter<br>


<p>4) Which of the following data binding interpolation is also known as "Mustache" syntax?
</p>
<input type="radio"  v-model="option4" value="v-on">/v-on<br>
<input type="radio"  v-model="option4" value="v-model" >/v-model<br>
<input type="radio" v-model="option4" value="{{}}" >/{{}}<br>
<input type="radio" v-model="option4" value="[]" >/[]<br>
<p>5) Which of the following is the correct way to install Vue.js in your project?</p><br>
<input type="radio"  v-model="option5" value="We can install Vue.js by using CDN by including script tag in HTML file.">We can install Vue.js by using CDN by including 'script tag in HTML file.<br>
<input type="radio"  v-model="option5" value="We can install Vue.js by using Node Package Manager (NPM).">We can install Vue.js by using Node Package Manager (NPM).<br>
<input type="radio"  v-model="option5" value="You can install Vue.js using Bower.">You can install Vue.js using Bower.<br>
<input type="radio"  v-model="option5" value="All of the above.">All of the above.<br> -->
    </div>

    <!-- <button @click="validateForm">marks</button>
<p>{{score}}</p> -->
  </div>
</template>
<script>
export default {
  name: "McqQns",

  data() {
    return {
      mcq: [
        {
          question: "1) Which of the following statement best define Vue.js?",
          answers: [
            "Vue.js is an open-source JavaScript library that is used for developing user interfaces.",
            "Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.",
            "Vue.js is an open-source, cross-platform, JavaScript run-time situation that performs the JavaScript program outside a web browser.",
            "Vue.js is a JavaScript library constructed to facilitate HTML DOM tree traversal and administration, event handling, CSS activity, and Ajax.",
          ],
          correctAnswer:
            "Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.",
          index: "one",
          answer: "",
        },
        {
          question: "2) Which company invented Vue.js?",
          answers: ["Facebook", "Google", "Oracle", "Twitter"],
          correctAnswer: "Google",
          index: "two",
          answer: "",
        },
        {
          question:
            "3) Which of the following data binding interpolation is also known as Mustache syntax?",
          answers: ["v-on", "v-model", "{{}}", "[]"],
          correctAnswer: "{{}}",
          index: "three",
          answer: "",
        },
        {
          question:
            "4) Which of the following is the correct syntax to use for loop in Vue.js?",
          answers: ["vFor", "v-for", "*v-for", "None of the above."],
          correctAnswer: "v-for",
          index: "four",
          answer: "",
        },
        {
          question:
            "5) Which of the following modifier is very useful for improving the performance of mobile devices?",
          answers: [".directive", ".once", ".capture", ".passive"],
          correctAnswer: ".passive",
          index: "five",
          answer: "",
        },
      ],
      // option1: "",
      // option2:"",
      // option3:"",
      // option4:"",
      // option5:"",
      // answer1:"Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.",
      // answer2:"Vue.js is called a progressive framework because it is being changed and developed continually.",
      // answer3:"Google",
      // answer4:"{{}}",
      // answer5:"All of the above.",
      // value:"",
      score: 0,
      mainh: {
        color: "red",
      },
    };
  },
  methods: {
    validate: function () {
      {
        this.score = 0;
        for (let ans of this.mcq) {
          if (ans.answer === ans.correctAnswer) {
            this.score = this.score + 5;
          }
        }

        return this.score;

        //     this.score=0
        // if(this.answer1===this.option1)this.score=this.score+1
        // if(this.answer2===this.option2)this.score=this.score+1
        // if(this.answer3===this.option3)this.score=this.score+1
        // if(this.answer4===this.option4)this.score=this.score+1
        // if(this.answer5===this.option5)this.score=this.score+1
        //    return this.score
      }
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
