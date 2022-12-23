<template>
    <div class="text">
        <div class="text bg-color">
            <h2 class="head">5. Which Country has Highest population?</h2>
            <input class="input-size" type="text" v-model='India'  placeholder="Enter a Text"/>
            <p :class="ageOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output :{{ ageOutput }}</p>    
        </div>
    
        <div class="text bg-color">
            <h2 class="head">6. Who killed Mahatma Gandhi?</h2>
            <input class="input-size" type="text" v-model='Godse'  placeholder="Enter a Text"/>
            <p :class="movieOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output :{{ movieOutput }}</p>    
        </div>
        
    </div>
          
    </template>
    
    <script>
    export default {
        name:'QuizZ',
        data() {
            return {
                answer4:'India',
                India:'',
                ageOutput:'',
    
                answer5:'Godse',
                Godse:'',
                movieOutput:'',
    
                score:0
            }
        },
        methods:{
            buttonEl(){
                if(this.answer4===this.India){
                    this.ageOutput='Correct Answer';
                    this.score+=1;
                }
                else if(this.answer4!==this.India){
                    this.ageOutput='Wrong Answer';
                    this.score-=1;
                }
                if(this.answer5===this.Godse){
                    this.movieOutput='Correct Answer';
                    this.score+=1;
                }
                else{
                    this.movieOutput='Wrong Answer';
                    this.score-=1;
                }
            }
        }
    }
    </script>
    
    <style>
    .text{
        text-align:left;
    }
    
    .head {
        font-size: 30px;
        color:black;
        font-family:"Roboto";
    }
    .Wrongoutput {
        color: red
    }
    
    .Correctoutput {
        color: green
    }
    .input-size{
        height:25px;
        width:200px;
        border-radius: 20px;

    }
    
    </style>