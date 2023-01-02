let obj= `{
    "questions":[
    {
        "q": "Props are used to pass down data to the ..",
        "correct": "child components",
        "ans": "",
        "qustype": "f"
    },
    {
        "q": " How many ways are there to define a filter in Vue.js?",
        "correct": "2",
        "ans": "",
        "qustype": "f"
    },
    {
        "q": "What is the correct full form of MVVM?",
        "correct": "Model-View-View Model",
        "ans": "",
        "qustype": "f"
    },
    {
        "q": "method does not represent the non-mutation?",
        "correct": "Reverse() Method",
        "ans": "",
        "qustype": "f"
    },
    {
        "q": " which keyword is used to create constant in Vue.js",
        "correct": "const",
        "ans": "",
        "qustype": "f"
    },
    {
        "q": " Which of the following statement best define Vue.js?",
        "options": [
            "Vue.js is an open-source JavaScript library that is used for developing user interfaces.",
            "Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.",
            "Vue.js is an open-source, cross-platform, JavaScript run-time situation that performs the JavaScript program outside a web browser.",
            "Vue.js is a JavaScript library constructed to facilitate HTML DOM tree traversal and administration, event handling, CSS activity, and Ajax."
        ],
        "correct": "Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.",
        "index": "one",
        "ans": "",
        "qustype": "m"
    },
    {
        "q": " Which company invented Vue.js?",
        "options": ["Facebook", "Google", "Oracle", "Twitter"],
        "correct": "Google",
        "index": "two",
        "ans": "",
        "qustype": "m"
    },
    {
        "q": " Which of the following data binding interpolation is also known as Mustache syntax?",
        "options": ["v-on", "v-model", "{{}}", "[]"],
        "correct": "{{}}",
        "index": "three",
        "ans": "",
        "qustype": "m"
    },
    {
        "q": " Which of the following is the correct syntax to use for loop in Vue.js?",
        "options": ["vFor", "v-for", "*v-for", "None of the above."],
        "correct": "v-for",
        "index": "four",
        "ans": "",
        "qustype": "m"
    },
    {
        "q": "Which of the following modifier is very useful for improving the performance of mobile devices?",
        "ans": [".directive", ".once", ".capture", ".passive"],
        "correct": ".passive",
        "index": "five",
        "ans": "",
        "qustype": "m"
    }
]
}`
let A = JSON.parse(obj);

A = A.questions;

let M = [];

let MS =[];

let FILL = [];

A.forEach((item) => (item.qustype=="m")? M.push(item):(item.qustype=="f")? FILL.push(item):MS.push(item)

);

let totalQns = [M,FILL];

export default totalQns;