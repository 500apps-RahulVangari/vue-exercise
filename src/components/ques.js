let obj_B =`{
    "QuestionsArray":[
        {"question" :"Q1)Which company invented Vue.js?","options":["Facebook","Oracle","Twitter","Google"],"correctAnswer": "Google","val": "","type":"mcq","index":"1"},
        {"question" :"Q2)Which of the following data binding interpolation is also known as Mustache syntax?","options":["v-on","v-model","{{}}","[]"],"correctAnswer": "{{}}","val": "","index":"2","type":"mcq"},
        {"question" :"Q3)Which of the following is the correct syntax to use for loop in Vue.js?","options":["v-for","vFor","*v-for","None of the above"],"correctAnswer": "v-for","index":"3","val": "","type":"mcq"},
        {"question" :"Q4)Which of the following directive is used for one-way data binding in Vue.js?","options":["v-on","v-model","no-one","v-bind"],"correctAnswer": "v-bind","index":"4","val": "","type":"mcq"},
        {"question" :"Q5)Which of the following directive is used for two-way binding in Vue.js?","options":["v-on","v-model","no-one","v-bind"],"correctAnswer": "v-model","index":"5","type":"mcq","val": ""},
        {"question" :"Q1)How many ways are there to define a filter in Vue.js?","index":"1","correctAnswer": "2","blank":"","type":"fillblank"},
        {"question" :"Q2)What is the data binding interpolation is also known as Mustache syntax?","index":"2","correctAnswer": "Reverse() Method","blank":"","type":"fillblank"},
        {"question" :"Q3)What keyword is used to create constant in Vue.js?","index":"3","correctAnswer": "const","blank":"","type":"fillblank"},
        {"question" :"Q4)How many types of directives are available in Vue.js? ","index":"4","correctAnswer": "4","blank":"","type":"fillblank"},
        {"question" :"Q5)Name one website which are using Vue.js?","index":"5","correctAnswer": "Netflix","blank":"","type":"fillblank"}
        ]
      
}`
let obj_A = JSON.parse(obj_B);
obj_A = obj_A.QuestionsArray;
let mcq = [];
let fillBlank = [];
obj_A.forEach((i) => (i.type=='mcq')? mcq.push(i): fillBlank.push(i));
let obj_C = [fillBlank,mcq];
export default obj_C;
