<template>
    <div class="bg-color">

        <h1 class="head">1. What is The Capital Of India</h1>
        <input class='text-danger' type="radio" v-model="city" value="Delhi">Delhi
        <input type="radio" v-model="city" value="kolkata">Kolkata
        <input type="radio" v-model="city" value="Mumbai">Mumbai
        <input type="radio" v-model="city" value="Hyderabad">Hyderabad

        <p :class="cityOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output : {{ cityOutput }}</p>


        <h1 class="head">2. Who Invented Computer ?</h1>
        <input type="radio" v-model="Invention" value="Charles Babbage">Charles Babbage
        <input type="radio" v-model="Invention" value="Albert Einstein">Albert Einstein
        <input type="radio" v-model="Invention" value="Thomas Alva Edison">Thomas Alva Edison
        <input type="radio" v-model="Invention" value="Yerrapragada Subbarao">Yerrapragada Subbarao

        <p :class="inventionOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output : {{ inventionOutput }}</p>


        <h1 class="head">3. Who is The First Prime Minister of India ?</h1>
        <input type="radio" v-model="politics" value="Jawaharlal Nehru">Jawaharlal Nehru
        <input type="radio" v-model="politics" value="Mahatma Gandhi">Mahatma Gandhi
        <input type="radio" v-model="politics" value="Godse">Godse
        <input type="radio" v-model="politics" value="BhagatSingh">BhagatSingh

        <p :class="politicsOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output : {{ politicsOutput }}</p>

<!-- 
        <h1 class="head">Who is the Father of the Nation ?</h1>
        <input type="radio" v-model="India" value="Jawaharlal Nehru">Jawaharlal Nehru
        <input type="radio" v-model="India" value="BhagatSingh">BhagatSingh
        <input type="radio" v-model="India" value="Lalbahadur Sastry">Lalbahadur Sastry
        <input type="radio" v-model="India" value="Mahatma Gandhi">Mahatma Gandhi

        <p :class="nationOutput.includes('Wrong') ? 'Wrongoutput' : 'Correctoutput'">Output : {{ nationOutput }}</p> -->

        <!-- <h1>Who Invented Computer ?</h1>
        <input type="radio" v-model="Invention" value="Charles Babbage">Charles Babbage
        <input type="radio" v-model="Invention" value="Albert Einstein">Albert Einstein
        <input type="radio" v-model="Invention" value="Thomas Alva Edison">Thomas Alva Edison
        <input type="radio" v-model="Invention" value="Yerrapragada Subbarao">Yerrapragada Subbarao
        
        <p>Output : {{ Inventionvalue }}</p> -->
        
    </div>
</template>
  
<script>
export default {
    name: "QuiZ",
    data() {
        return {
            answer: "Delhi",
            city: "",
            cityOutput: "",

            answer2: 'Charles Babbage',
            Invention: '',
            inventionOutput: '',

            answer3: 'Jawaharlal Nehru',
            politics: '',
            politicsOutput: '',

            answer4: 'Mahatma Gandhi',
            India: '',
            nationOutput: '',

            score: 0
        }
    },
    methods: {
        QuizSubmitButton() {
            // this.value = this.city == this.answer ? "correct Answer" : "Answer wrong"
            if (this.answer === this.city) {
                this.cityOutput = "Correct Answer"
                this.score += 5
            }
            else if (this.answer !== this.city) {
                this.cityOutput = "Wrong Answer"
                this.score -= 5
            }

            if (this.answer2 === this.Invention) {
                this.inventionOutput = "Correct Answer"
                this.score += 5
            }
            else if (this.answer2 !== this.Invention) {
                this.inventionOutput = "Wrong Answer"
                this.score -= 5
            }
            if (this.answer3 === this.politics) {
                this.politicsOutput = "Correct Answer"
                this.score += 5
            }
            else if (this.answer3 !== this.politics) {
                this.politicsOutput = "Wrong Answer"
                this.score -= 5
            }
            // if (this.answer4 === this.India) {
            //     this.nationOutput = "Correct Answer"
            //     this.score += 5
            // }
            // else if (this.answer4 !== this.India) {
            //     this.nationOutput = "Wrong Answer"
            //     this.score -= 5
            // }

        }
    }
}
</script>
<style>

body {
    margin: 0px;
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

.head {
    font-size: 20px;
    color:black;
    font-family:"Roboto";
}
.para{
    color:black;
}

.btn {
    background-color: green;
    height: 30px;
    font-size:20px;
    font-weight:bold;
    width: 90px;
    color: white;
}
.score{
    color:black;
    font-weight:bold;
}
.para{
    color:black;
    font-weight:bold;
}
</style>