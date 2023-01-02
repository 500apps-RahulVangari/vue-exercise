<template>
    
    <div><button @click="finalOutput">score</button> 
    <h1>Your score is  {{ score }}</h1>
    <b-button variant=" danger" ><router-link to='/'>Refresh</router-link></b-button>



    <!-- <b-button to="/App">Reset </b-button> -->
        <div id="name">
           
    <div>
<McqTest ref ="child1"/>
<BlanksTest ref ="child2"/></div>

</div>
</div>
</template>
<script>
import BlanksTest from './BlanksTest.vue';
import McqTest from './McqTest.vue';

export default{
    name:'resultPage',
    components:{
    McqTest,
    BlanksTest,
    
    },
    data(){
        return{
            score:0,
        };
    },

    methods:{
        finalOutput() {
            // console.log('hello--------')
            this.score=0;
            this.$refs.child1.finalOutput();
            this.$refs.child2.finalOutput();
            this.score = this.$refs.child1.res1 + this.$refs.child2.res2;
        return this.score
        },
    },

   reset()
  {
    for (let i of this.totalQns){
        console.log("hiiiiiii")
      i.userAns=null
    }
    this.score=0
  }
    
}
</script>
<style>
#name{
    visibility: hidden;
}

</style>