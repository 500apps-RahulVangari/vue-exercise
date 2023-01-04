<template>
<div>
  <h2>Fill in the blanks</h2><br><br>
  <p>Fiil the correct answer below</p>
  <div v-for="item in value" :key=item.index>{{item.Question}}
    <input type="text"  v-model='item.answer'/>{{answer}}
    <obj/>
  </div>
  <!-- <button @click="submit">Submit</button> 
    <p>result {{ result2 }}</p> -->
    <!-- <b-button variant=" danger" ><router-link to='/box'>next page</router-link></b-button> -->
    <b-button to="/box" variant="danger" > nextpage </b-button>
    <!-- <b-button variant="danger"  href="result">display result</b-button> -->
    </div>
    </template>
    <script>
    import obj from './json.js';
    export default{
      name:"FillBlanks",
      /* props:{
        value:Function
      }*/
      components:{
        obj,
      },
      data(){
        return{
          value:obj[1],
          result2:0
        }
      },
      methods: {
        sum2() {
          this.result2 = 0;
          this.value.forEach((i) => {
            if(i.answer === i.option) {
              this.result2 = this.result2 + 1;
            }
          });
          return this.result2;
        }
      },
      }
      </script>