<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <button @click="submit">Submit</button>
    <p> your total score is {{ result }}</p>

    <div id="m">
    <MCQPage ref="child1"/>
         <FillBlankPage ref="child2"/></div>
  </div>
</template>

<script>
 import  FillBlankPage from '../components/FillBlankPage.vue'
 import MCQPage from '../components/StartPage.vue'
export default{
  name:"TotalMarks",
  components:{
     FillBlankPage,
      MCQPage
  },
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    submit() {
      this.result = 0;
      this.$refs.child1.submit();
      this.$refs.child2.submit();
      this.result = this.$refs.child1.result1 + this.$refs.child2.result2;
      return this.result;
    },
  },
}


</script>
<style scoped>
#m {
  visibility: hidden;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1e2120;
}
</style>
