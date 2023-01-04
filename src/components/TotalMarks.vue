<template>
  <div class="hello">
     <button @click="submit">Submit</button>
    <p> your total score is {{ result }}</p>
     <b-button variant="outline-primary"><router-link to="/">refresh here</router-link></b-button>|

    <div id="m">
    <MCQPage ref="child1"/>
    <FillBlankPage ref="child2"/>
    <CheckBoxPage ref="child3"/> </div>
  </div>
</template>

<script>
 import  FillBlankPage from '../components/FillBlankPage.vue'
 import MCQPage from '../components/StartPage.vue'
 import CheckBoxPage from '../components/CheckBoxPage.vue'
export default{
  name:"TotalMarks",
  components:{
     FillBlankPage,
      MCQPage,
      CheckBoxPage
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
      this.$refs.child3.submit();
      this.result = this.$refs.child1.result1 + this.$refs.child2.result2+ this.$refs.child3.result3;
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
