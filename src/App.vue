<template>
  <div id="app">
    
    <!-- <QuestionBox msg="hello"/> -->
    <!-- <FillBlanks msg="hlo"/> -->
    <!-- <ParentVue/> -->
    <!-- <nav>
       <router-link to="/">about</router-link> |
      <router-link to="/FillBlanks">HomeView</router-link> 
    </nav>
    <router-view/> -->
    
    <router-view/>
   
  </div>
</template>
<script>

 //import QuestionBox from './components/QuestionBox'
 //import FillBlanks from './components/FillBlanks'
 //import ParentVue from '../components/ParentVue.vue';
export default{
  components:{
   // QuestionBox,
    // FillBlanks,
   // ParentVue,
  }
}


</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  background-color:cadetblue;
  height: 100% 
  
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color:brown;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
