<template>

<div class="fillBlanks" id="fillBlanks" >
<h1>{{ msg }}</h1>
<p v-for="each in QuestionsArray" :key="each.id">{{each.question}}<input type="text" v-model="each.blank" ></p>
</div>
</template>

<script>

export default {
name: 'BlanksVue',
props: {
msg: String
},

data() {
return {

Result2 :0,
QuestionsArray:[
{question :"Q1)How many ways are there to define a filter in Vue.js?",correctAnswer: "2",index:1,blank:""},
{question :"Q2)Which of the following data binding interpolation is also known as Mustache syntax?",correctAnswer: "Reverse() Method",index:2,blank:""},
{question :"Q3)What keyword is used to create constant in Vue.js?",correctAnswer: "const",index:3,blank:""},
{question :"Q4)How many types of directives are available in Vue.js? ",correctAnswer: "4",index:4,blank:""},
{question :"Q5)Name one website which are using Vue.js?",correctAnswer: "Netflix",index:5,blank:""},
],
};
},
methods:{
GettingOutput(){
this.Result2=0;
this.QuestionsArray.forEach((each)=>{
if( each.blank===each.correctAnswer ) {
this.Result2=this.Result2+1;
}
return this.Result2
})

},

},
};
</script>
<style>

</style>