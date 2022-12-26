<template>
<div id="blanks">
<p v-for="item in title" :key="item.id">{{item.Question}}<input type="text"   v-model="item.first"    ></p>
 

 <!-- <button @click="validateForm()">submit</button>
<p>{{score}}</p>   -->

</div>
</template>
                                                                                                                                                                                                                                                                                                                                                            
<script>
export default {
  name: 'BlankQns',
   props: "score",
   data() {
    return {
     
      score2:0,
      title:[
        {Question:"6.What word is spelled incorrectly in every single dictionary?",ans:"incorrectly",index:"one", first: ""},
      {Question:"7.What never asks a question but gets answered all the time?",ans:"call",index:"two", first: ""},
       {Question:"8.What has to be broken before you can use it?",ans:"egg",index:"three", first: ""},
        {Question:"9.I’m tall when I’m young, and I’m short when I’m old. What am I?",ans:"candle",index:"four", first: ""},
         {Question:"10.What is full of holes but still holds water?",ans:"sponge",index:"five", first: ""}
    ]

          }},
          methods:{
            validateForm(){
              
              for (let i of this.title){
                
                   if (i.first===i.ans){
                     
                    this.score2=this.score2+1
                   }
              }
              
              return this.score2;
            },
            refresh(){
                for (let i of this.title){
                  i.first=""
                }
                this.score2=0

            }
          }


 }




</script>