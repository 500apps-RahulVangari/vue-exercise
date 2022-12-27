<template>
  <div id="mcq">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
      <h2>Multiple Choice Question</h2>

    <div class ='mcq' v-for="i in questions" :key="i.id">{{ i.Q }}
    <div v-for="ans in i.options" :key="ans.id">
       <input type="radio" :value="ans" v-model="i.ans" />{{ ans }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "MCQ",
    props: {
     msg: String,
   },
  data() {
    return {
      result1: 0,

      questions: [
        {Q: "1.Addition of 22+33 ?",options: [55, 66, 50, 60],id: "1",Ans: 55,ans: ""},
        {Q: "2.Subtraction of 33-22?", options: [13, 14, 15, 12], id: "2",Ans: 12,ans: ""},
        {Q: "3 Multiplication of 11*11 ?",options: [111, 212, 121, 131],id: "3", Ans: 121,ans: "", },
        {Q: "4.Division of 22/2 ?",options: [10, 12, 15, 11],id: "4",Ans: 11,ans: "",},
     ],
    };
  },

  methods: {
    submit1: function() {
      for (let i of this.questions) {
          if (i.ans === i.Ans) {
          this.result1 = this.result1 + 1;
        }
      }
    },

    
  },
};
</script>

<style>
#mcq{

  margin-left: 35%;

  margin-right: 40%;

  background-color: rgb(125, 199, 233);

} 
.mcq{
  padding: 3%;
}
h2{
  margin-left: 2%;
  color: blueviolet;
}
</style>
