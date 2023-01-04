let exam =`{
    "questions":[
    {
"qns" :"1.How many weeks are in a year?",
"options":[ "50", "53", "52", "51"],
"correctAns": "52",
"index":"1","userAns":"","type":"mcq"
},
{
"qns":"2.Which colour symbolises peace?",
"options":["white","green","orange","blue"],
"correctAns":"white",
"index":"2","userAns":"","type":"mcq"
},
{
"qns":"3.If you have a bowl with six apples and you take away four, how many do you have?",
"options":["6", "4", "0", "2"],
"correctAns":"4",
"index":"3","userAns":"","type":"mcq"
},
{
"qns":"4. How many dots appear on a pair of dice?",
"options":["42", "41", "24", "22"],"type":"mcq",
"correctAns":"42",
"index":"4","userAns":""
},

{"qns":"5.What is the national Bird of india?","correctAns":"peacock", "index":"1", "userAns":"","type":"blanks"},

{"qns":"6.Which Hand shows hours in a clock ?", "correctAns":"short hand","index":"2", "userAns":"","type":"blanks"},

{"qns":"7.How many seconds in a minute ?", "correctAns":"60","index":"3",  "userAns":"","type":"blanks"},

{"qns":"8.How many rings are present in Olympic logo ?", "correctAns":"5","index":"4",  "userAns":"","type":"blanks"},

{ "qns":"9.Which of the following are Programming Languages ?",
"options":["C","English","Java","Hindi"],
"type":"checkbox",
"index":"one",
"correctAns":["C", "Java"],
"userAns":[],"value":"index1"
},

{
 "qns":"10.Select fruits from the list ?",
"options":["apple","orange","mango","all of the above"],
"type":"checkbox",
"index":"two",
"correctAns":["apple","orange","mango","all of the above"], 
"userAns":[],"value":"index2"
}
]
 }`
let examPaper = JSON.parse(exam)
examPaper=examPaper.questions
let SingleMcq=[]
let blank=[]
let MultipleMcq=[]
examPaper.forEach((item) => (item.type=='mcq')? SingleMcq.push(item) :(item.type=='blanks')? blank.push(item):MultipleMcq.push(item))
let totalQns=[SingleMcq,blank,MultipleMcq]
export default totalQns;