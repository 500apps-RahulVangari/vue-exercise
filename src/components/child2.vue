<template>
<div>
    <div class="text bg-color">
        <h1 class="head">4. What is the correct Age for casting a Vote ?</h1>
        <input type="text" v-model='Eighteen'  placeholder="Enter a Text"/>
        <p :class="ageOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output :{{ ageOutput }}</p>    
    </div>

    <div class="text bg-color">
        <h1 class="head">5. Who killed Bahubali?</h1>
        <input type="text" v-model='Kattappa'  placeholder="Enter a Text"/>
        <p :class="movieOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output :{{ movieOutput }}</p>    
    </div>
    
</div>
    
    
    
</template>

<script>
export default {
    name:'QuizZ',
    data() {
        return {
            answer4:'18',
            Eighteen:'',
            ageOutput:'',

            answer5:'Kattappa',
            Kattappa:'',
            movieOutput:'',

            score:0
        }
    },
    methods:{
        QuizSubmitButton(){
            if(this.answer4===this.Eighteen){
                this.ageOutput='Correct Answer';
                this.score+=5;
            }
            else if(this.answer4!==this.Eighteen){
                this.ageOutput='Wrong Answer';
                this.score-=5;
            }
            if(this.answer5===this.Kattappa){
                this.movieOutput='Correct Answer';
                this.score+=5;
            }
            else{
                this.movieOutput='Wrong Answer';
                this.score-=5;
            }
        }
    }
}
</script>

<style>

.head {
    font-size: 20px;
    color:black;
    font-family:"Roboto";
}
.bg-color {
    background-color:white;
    background-size: cover;
    text-align:left;
    padding-left:50px;
    
}
.Wrongoutput {
    color: red
}

.Correctoutput {
    color: green
}

</style>