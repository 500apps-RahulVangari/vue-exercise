<template>
  <div class="home">
    <h1>welcome to fun quiz</h1><br><br>
    <p>please follow the below guidelines</p>
    <p>1.firstly you'll get multiple choice questions,select radio button properly</p>
    <p>2.later you'll get fill in the blanks,fill the correct answer in the given blank</p>
    <p>3.each question carries one mark</p>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <b-button variant=" danger" ><router-link to='/mcq'>start quiz</router-link></b-button> -->
    <b-button variant="danger" href="/mcq">start quiz</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
  }
}
</script>
