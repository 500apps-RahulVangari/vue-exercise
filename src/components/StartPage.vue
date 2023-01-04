<template>

  <div class="StartPage" id="StartPage">
  
    <h2>The Exam consists of Three Sections</h2>
      <p>SECTION 1) Fill in the Blanks</p>
      <p>SECTION 2) Multiple Choice Questions</p>
      <p>SECTION 3) Multiple Select Questions</p>
      <p>Total 15 marks <br>Each correct answer carry 1 mark <br> No negative marks  <br> Time : 5 mins</p>
    <h1 >Let's Start the Exam</h1>
      <div>
        <b-button to="/fill" variant="outline-info">Start</b-button>
      </div>
  </div>
</template>
  
<script>
  
  export default {
    name: 'StartPage',
    data() {
      return {
      };
    },
  };
</script>

<style>

#StartPage {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background-color: yellow;
}
 
</style>