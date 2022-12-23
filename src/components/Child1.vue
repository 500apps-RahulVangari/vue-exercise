<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>Multiple choice questions</h3>
    <form>
    <p>Which company invented Vue.js?</p>
   <div v-if="show_options">
      <input type="radio"   name="age" value="Facebook" v-model="answer1.given_answer" />
      <label for="Facebook">Facebook</label>
      <input type="radio"  name="age" value="Google" v-model="answer1.given_answer" />
      <label for="Google">Google</label>
      <input type="radio"  name="age" value="Oracle" v-model="answer1.given_answer" />
      <label for="Oracle">Oracle</label>
    </div>
    <p> Which of the following directive is used for two-way binding in Vue.js?</p>
    <div v-if="show_options">
      <input type="radio"  name="text" value="v-on" v-model="answer2.given_answer" />
      <label for="age1">v-on</label>
      <input type="radio"  name="text" value="v-model" v-model="answer2.given_answer" />
      <label for="age2">v-model</label>
      <input type="radio"  name="text" value="v-bind" v-model="answer2.given_answer" />
      <label for="age3">v-bind</label>
    </div>
<!-- <button @click="submit_answer()" >Submitted</button> -->
</form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      answer1: {
        correct_answer: "Google",
        given_answer: "",
      },
    answer2: {
        correct_answer: "v-model",
        given_answer: "",
      },
      score:0,
      show_options:true,

    };
  },
  methods:{
       submit_answer (){
         this.score=0;
         if(this.answer1.correct_answer===this.answer1.given_answer){
           this.score=this.score+2;
         }
         if(this.answer2.correct_answer===this.answer2.given_answer){
           this.score=this.score+2;
         }
        //  this.$emit("showmsg",this.score)
       },
       
       }
  };
</script>
