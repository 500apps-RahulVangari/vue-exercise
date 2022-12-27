<template>
  <div id="fill">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <h2>Fill in the Blanks</h2>
    <div class ='fill' v-for="i in Questions" :key="i.index">{{ i.Q }}
      <input class='input' type="Number" placeholder="Enter Answer"  v-model="i.ans"  size="2" />
    </div>
  </div>
</template>
<script>
export default {
  name: "FILL",
  props: {
    msg: String,
  },
  data() {
    return {
      result2: 0,
      Questions: [
        {Q: "1.Evaluate this  55.5//10 ?",Ans: 5,ans: ""},
        {Q: "2.Evaluate this  2**4+5-2 ?",Ans: 19,ans: ""},
        {Q: "3.Sum of Array = [2,5,7,1] ?",Ans: 15,ans: ""},
        {Q: "4.Len of Array = [2,4,1,3] ?",Ans: 4,ans: ""},
      ],
    };
  },
  methods: {
    submit2:function() {
      console.log("hello")
      for (let i of this.Questions) {
        if (Number(i.ans) == i.Ans) {
          this.result2 = this.result2 + 1;
        }
        }  
    },
    
  },
};
</script>

<style >
#fill{

  margin-left: 35%;

  margin-right: 40%;

  background-color: rgb(125, 199, 233);

} 
.fill{
  padding: 3%;
}
.input{
  text-align: center;
}


</style>