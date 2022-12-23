<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <h3>fill in the blanks</h3>
      <div>
          Insert the correct plural form of the noun strawberry:<input type="text" v-model="blanks1.given_answer"
              v-if="show_blanks" />
      </div>
      <br />
      <div>Tom has 2 strawberries. Jill gives him 4 more strawberries. Now, Tomshas
          <input type="text" v-model="blanks2.given_answer" v-if="show_blanks" />strawberries.
      </div>
      <br />
<!-- <button @click="submit_answer1()" >Submitted</button> -->
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
      blanks1: {
      correct_answer: "hii",
      given_answer: "",
    },
    blanks2: {
      correct_answer: "hello",
      given_answer: "",
    },
    score:0,
    show_blanks:true,

      };
  },

  methods:{
     submit_answer1 (){
       this.score=0;
       if(this.blanks1.correct_answer==this.blanks1.given_answer){
         this.score=this.score+2;
       }
       if(this.blanks2.correct_answer==this.blanks2.given_answer){
         this.score=this.score+2;
       }
      //  this.$emit("showData",this.score)
     },
     
     }
};
</script>