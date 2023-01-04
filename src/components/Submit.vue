<template>
  <div id="sm">
    <p id="p"><b>Score out of 30</b></p>
    <footer>
    <div id="div">
      <button class="bttn" v-on:click="submit">Submit</button> &nbsp;&nbsp;
      <input class="result" placeholder="Result" size="3" v-model="result" />
      <br>
      <footer id="foot">
        <button @click="pri()">Privious</button>&nbsp;&nbsp;&nbsp;&nbsp;
  
      
    </footer>
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
      this.result =this.$refs.child1.result1 +this.$refs.child2.result2 ;//+ this.$refs.child3.result3;
    },
    next(){
      this.$router.forward();

    },
    pri(){
      this.$router.back();
    }
  },
};
</script>

<style>
#hid {
  visibility: hidden;
}
#p{
  margin-top: 2%;
}
</style>