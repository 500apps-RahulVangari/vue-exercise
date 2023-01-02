<template>
  <div>
    <button @click="finalOutput" varient="Success">submit</button>
     <h3>Your score is {{ score }}/10</h3>
     <b-button @click="refresh" to="/StartPage" variant="success" > refresh</b-button>
    <div id="name">
      <McqTest ref="child1" />
      <BlanksTest ref="child2" />
    </div>
    
      <!-- {{ score }} -->
    
  </div>
</template>
<script>
import BlanksTest from "./BLANKSTest.vue";
import McqTest from "./McqTest.vue";

export default {
  name: "resultPage",
  components: {
    McqTest,
    BlanksTest,
  },
  data() {
    return {
      score: 0,
    };
  },

  methods: {
    finalOutput() {
      console.log("hel");
      this.score = 0;
      this.$refs.child1.finalOutput();
      this.$refs.child2.finalOutput();
      this.score = this.$refs.child1.res1 + this.$refs.child2.res2;
      return this.score;
    },
  },

  refresh() {
    for (let i of this.totalQns) {
      i.userAns = "";
    }
    this.score = 0;
  },
};
</script>
<style>
#name {
  visibility: hidden;
}
</style>
