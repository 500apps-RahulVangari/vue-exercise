<template>
<div id="checkbox">
    <h2>select multiple answers..</h2><br><br>
    <p>Choose the correct answers below</p><br>
    <obj />
    <div v-for="i in questions" :key="i.id">
        <p>{{ i.Question }}</p>
        <div v-for="option in i.options" :key="option.id">
            <b-form-checkbox :value="option" v-model="i.answer">{{ option }}
            </b-form-checkbox>
        </div>
    </div>
    <!-- <b-button variant=" danger" ><router-link to="/result">diaplay result</router-link></b-button> -->
    <b-button to="/result" variant="danger"> displayresult </b-button>
    </div>
    </template>
    <script>
    import obj from "./json";
    // import totalQns from './json';
    export default {
        components: { obj },
        name: "CheckBox1",
        data() {
            return {
                result3: 0,
                questions: obj[2],
                // value:"",
            };
        },
        methods: {
            sum3() {
                this.result3 = 0;
                this.questions.forEach((item) => {
                    if (JSON.stringify(item.answer) === JSON.stringify(item.correct)) {
                        // console.log("oooooooooooooo")
                        this.result3 = this.result3 + 1;
                    }
                    return this.result3;
                });
            },
        },
        };
        </script>
        <!-- <style>
         #checkbox {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            }
            </style>  -->
