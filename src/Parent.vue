<template>
  <div id="app">
    <center>
    <h1>QUIZ COMPITITION</h1></center>
    <Child1 ref="multiple" /><br>
    <Child2 ref="blanks" /><br>
    <button @click="valid">submit</button>
    <h3>Marks:{{ value }}</h3>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
export default {
  name: "App",
  components: {
    Child1,Child2
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    valid() {
      this.$refs.multiple.submit();
      this.$refs.blanks.submit1();
      this.value = this.$refs.multiple.value + this.$refs.blanks.value;
    },
  },
};
</script>
