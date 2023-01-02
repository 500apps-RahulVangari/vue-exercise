

let object=`{
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
}
]
}`
let num = JSON.parse(object);
num = num.questions;
let M = [];
let FILL = [];
num.forEach((item) => (item.Qtype=='mcq')?M.push(item):FILL.push(item));
let obj=[M,FILL];
export default obj;



