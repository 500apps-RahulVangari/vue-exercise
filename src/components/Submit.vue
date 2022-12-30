<template>
  <div id="sm">
    <h1>Quiz</h1>
    <footer>
    <div id="div">
      <button class="bttn" v-on:click="submit">Submit</button> &nbsp;&nbsp;
      <input class="result" placeholder="Result" size="3" v-model="result" />
    </div>
  </footer>
    <div id="hid">
      <MCQ ref="child1" />
      <Fill ref="child2" />
      <MS ref="child3" />
    </div>
  </div>
</template>

<script>
import MCQ from "./Child1.vue";
import Fill from "./Child2.vue";
import MS from "./Child3.vue";
export default {
  name: "SMT",
  components: {
    MCQ,
    Fill,
    MS,
  },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    submit() {
      this.$refs.child1.submit1();
      this.$refs.child2.submit2();
      this.$refs.child3.submit3();
      this.result =
        this.$refs.child1.result1 +
        this.$refs.child2.result2+this.$refs.child3.result3;
    },
  },
};
</script>

<style>
#hid {
  visibility: hidden;
}
/* #app{
  background-color: rgb(164, 224, 219);
}
#div{
  margin-top: 2%;
  margin-left: 42%;
}
h1{
   margin-left: 42.5%;
   color: blueviolet;
}
.bttn ,.result{
  background-color: rgb(112, 241, 107);
  text-align: center;
} */
</style>