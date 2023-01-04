<template>
    <div id="result">
    <div><button @click="finalOutput">score</button> 
    <h1>Your score is  {{ score }}</h1>
    <!-- <b-button variant=" danger" ><router-link to="reset">Refresh</router-link></b-button> -->
    <b-button><router-link to='/'>HomePage</router-link></b-button>
    

    <!-- <b-button to="/App">Reset </b-button> -->
        <div id="name">
           
        <div>
<McqTest ref ="child1"/>
<BlanksTest ref ="child2"/>
<CheckBoxs ref ="child3"/>
</div>
</div>
</div>
</div>
</template>
<script>
import BlanksTest from './BlanksTest.vue';
import McqTest from './McqTest.vue';
import CheckBoxs  from './CheckBoxs.vue';

export default{
    name:'resultPage',
    components:{
    McqTest,
    BlanksTest,
    CheckBoxs,
    
    },
    data(){
        return{
            score:0,
            value:"",
            
        };
    },

    methods:{
        finalOutput() {
            // console.log('hello--------')
            this.score=0;
            this.$refs.child1.finalOutput();
            this.$refs.child2.finalOutput();
            this.$refs.child3.finalOutput();
            this.score = this.$refs.child1.res1 + this.$refs.child2.res2 + this.$refs.child3.res3;
        return this.score
        },
    },
    
}
</script>
<style>
#name{
    visibility: hidden;
}
   #result {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  

</style>