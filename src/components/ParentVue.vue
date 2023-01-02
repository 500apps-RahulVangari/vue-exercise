<!-- <template>
    <div>
        <QuestionBox :data="questions"/> 
        <QuestionBox msg="welcome" :data="questions"/> 
      
        <div v-for="item in questions" :key="item.index">
      {{ item.Question }}

      <div v-for="answer in item.options" :key="answer.index">
        <input type="radio" :value="answer" v-model="item.answer" />{{ answer }}
      </div>
    </div> 
     <b-button variant=" danger" ><router-link to='/mcq'>start quiz</router-link></b-button> 
     <FillBlanks/> 
    </div>
    </template>-->
    <!-- <script> -->
    <!-- import QuestionBox from "../components/QuestionBox.vue"
    import FillBlanks from "../components/FillBlanks.vue"

    export default{
            name:"ParentVue",
            components:{
                //QuestionBox,
                //FillBlanks,
            },
            data(){
                return{
              
        "questions": [
        {
          "Question": "1.what is vue js ?",
          "options": ["frontend framework", "backend framework"],
          "correct": "frontend framework",
          "answer": "",
          "index": "one",
          "Qtype":"mcq"
        },
        {
          "Question": "2.what is javascript ?",
          "options": ["scripting Language", "High level Language"],
          "correct": "scripting Language",
          "answer": "",
          "index": "two",
          "Qtype":"mcq"
        },
        {
          "Question": "3.what is java ?",
          "options": ["High level Language", "low level Language"],
          "correct": "High level Language",
          "answer": "",
          "index": "three",
          "Qtype":"mcq"
        },
        {
          "Question": "4.which language is platform independent ?",
          "options": ["javascropt", "java"],
          "correct": "java",
          "answer": "",
          "index": "four",
          "Qtype":"mcq"
        },
        {
            "Question": "1.enter value of 2+3 :",
            "option": "5",
            "answer": "",
            "Qtype":"blanks"
          },
          {
            "Question": "2.enter value of 2-3 :",
            "option": "-1",
            "answer": "",
            "Qtype":"blanks"
          },
          {
            "Question": "3.enter value of 8/2 :",
            "option": "4",
            "answer": "",
            "Qtype":"blanks"
          },
          {
            "Question": "4.enter value of 2*3 :",
            "option": "6",
            "answer": "",
            "Qtype":"blanks"
          },
        ],
        
    },
            },
    computed:{
        sharedata(){
            return this.questions.forEach((item)=>{item.Qtype=="mcq"})
        }
    }
} -->
<!-- </script> -->
       