<template>

<div id="mcqCode" clas="mcqCode">
<h1>{{ msg }} </h1>
<div v-for="each in QuestionsArray" :key="each.id">
<p>{{ each.question}}</p>
<div v-for= "val in each.options" :key="val.id">
<input type="radio" :value="val" v-model = "each.val">{{ val }}
</div>
</div>
</div>
</template>
<script>

export default {
name: 'mcqCode',
props: {
msg: String
},
data() {
return {
Result1 :0,
QuestionsArray:[
{
question :"Q1)Which company invented Vue.js?",
options:["Facebook","Oracle","Twitter","Google"],
correctAnswer: "Google",
index:1,
val: ""
},
{
question :"Q2)Which of the following data binding interpolation is also known as Mustache syntax?",
options:["v-on","v-model","{{}}","[]"],
correctAnswer: "{{}}",
index:2,
val: "",
},
{
question :"Q3)Which of the following is the correct syntax to use for loop in Vue.js?",
options:["v-for","vFor","*v-for","None of the above"],
correctAnswer: "v-for",
index:3,
val: "",
},
{
question :"Q4)Which of the following directive is used for one-way data binding in Vue.js?",
options:["v-on","v-model","no-one","v-bind"],
correctAnswer: "v-bind",
index:4,
val: "",
},
{
question :"Q5)Which of the following directive is used for two-way binding in Vue.js?",
options:["v-on","v-model","no-one","v-bind"],
correctAnswer: "v-model",
index:5,
val: ""
},
],
value : "",
};
},
methods:{
GettingOutput(){
this.Result1=0
this.QuestionsArray.forEach((each)=>{

if( each.val===each.correctAnswer ) {
this.Result1=this.Result1+1;
}
return this.Result1
})

},
},
};

</script>

<style scoped>
#mcqCode{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background-color:lightgreen;
  background-size: cover;
}
</style>
