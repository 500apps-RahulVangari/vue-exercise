let obj_B =`{
    "QuestionsArray":[
        {"question" :"Q1)Which company invented Vue.js?","options":["Facebook","Oracle","Twitter","Google"],"correctAnswer": "Google","mcqOption": "","type":"mcq","index":"1"},
        {"question" :"Q2)Which of the following data binding interpolation is also known as Mustache syntax?","options":["v-on","v-model","{{}}","[]"],"correctAnswer": "{{}}","mcqOption": "","index":"2","type":"mcq"},
        {"question" :"Q3)Which of the following is the correct syntax to use for loop in Vue.js?","options":["v-for","vFor","*v-for","None of the above"],"correctAnswer": "v-for","index":"3","mcqOption": "","type":"mcq"},
        {"question" :"Q4)Which of the following directive is used for one-way data binding in Vue.js?","options":["v-on","v-model","no-one","v-bind"],"correctAnswer": "v-bind","index":"4","mcqOption": "","type":"mcq"},
        {"question" :"Q5)Which of the following directive is used for two-way binding in Vue.js?","options":["v-on","v-model","no-one","v-bind"],"correctAnswer": "v-model","index":"5","type":"mcq","mcqOption": ""},
        {"question" :"Q1)How many ways are there to define a filter in Vue.js?","index":"1","correctAnswer": "2","fillBlank":"","type":"fillblank"},
        {"question" :"Q2)What is the data binding interpolation is also known as Mustache syntax?","index":"2","correctAnswer": "Reverse() Method","fillBlank":"","type":"fillblank"},
        {"question" :"Q3)What keyword is used to create constant in Vue.js?","index":"3","correctAnswer": "const","fillBlank":"","type":"fillblank"},
        {"question" :"Q4)How many types of directives are available in Vue.js? ","index":"4","correctAnswer": "4","fillBlank":"","type":"fillblank"},
        {"question" :"Q5)Name one website which are using Vue.js?","index":"5","correctAnswer": "Netflix","fillBlank":"","type":"fillblank"},
        {"question" :"Q1)How many types of the directive are used in Vue.js?","options":["General Directives","Literal Directives","Empty Directives","Custom Directives"],"correctAnswer": ["General Directives","Literal Directives","Empty Directives","Custom Directives"],"checkOption": [],"type":"check","index":"1"},
        {"question" :"Q2)Which of the following array detection mutation methods in Vue.js?","options":["push()","pop()","shift()","unshift()"],"correctAnswer": ["push()","pop()","shift()","unshift()"],"checkOption": [],"type":"check","index":"2"},
        {"question" :"Q3)Which of the following array detection non-mutation methods in Vue.js?","options":["filter()","concat()","slice()","Google"],"correctAnswer": ["filter()","concat()","slice()"],"checkOption": [],"type":"check","index":"3"},
        {"question" :"Q4)Which of the following Directives in Vue.js?","options":["v-if","v-on","v-for","for"],"correctAnswer": ["v-if","v-on","v-for"],"checkOption": [],"type":"check","index":"4"},
        {"question" :"Q5)Which of the following supported System Modifier Keys in Vue.js?","options":[".ctrl",".shift",".alt",".prop"],"correctAnswer": [".ctrl",".shift",".alt"],"checkOption": [],"type":"check","index":"5"}
        ]
}`
let obj_A = JSON.parse(obj_B);
obj_A = obj_A.QuestionsArray;
let mcq = [];
let fillBlank = [];
let checkBox = [];
obj_A.forEach((i) => (i.type=='mcq')? mcq.push(i):(i.type == "check")?checkBox.push(i): fillBlank.push(i));
let obj_C = [fillBlank,mcq,checkBox];
export default obj_C;
