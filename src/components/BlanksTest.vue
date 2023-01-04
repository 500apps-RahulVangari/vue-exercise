<template>

    <div id="blank">
      <h1>Fill in the blanks</h1>
      <hr />
<totalQns/>
    <div v-for = "data in question" :key="data.id">{{ data.qns }}
        <input type="text"  v-model="data.userAns" >
      </div>
      <b-button to="/CheckBoxs">Next </b-button>
    
    </div> 
    </template>
    
    <script>
    import totalQns from './json';
    
    export default {
      components:{
      totalQns
      },
    name: 'BlanksTest',
    // props:{question:Array},
    data (){
    return{

     res2:0,
  question:totalQns[1],
      value:"",
 
    }
  },
  
    methods:{
      finalOutput(){
        this.res2=0;
       this.question.forEach((item)=>{
        
          if(item.userAns === item.correctAns ) {
            this.res2 = this.res2+2;
            
        }  
         return this.res2;
        })
      }
    },
    reset()
  {
    for (let i of this.totalQns){
        console.log("hiiiiiii")
      i.userAns=null
    }
    this.score=0
    this.value=""
  }
    
    
}
        
    </script>
     <style>
     #blank {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
  </style>
    
    