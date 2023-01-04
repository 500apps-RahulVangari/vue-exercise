let B =`{
    "questions": [
        {
          "q": "1.The common element which describe the web page, is ?",
          "options": ["heading", "paragraph", "All of these"],
          "index": "1",
          "correct": "All of these",
          "qustype":"mcq",
          "ans": ""
        },
        {
          "q": "2.HTML stands for?",
          "options":["Hyper Text Markup Language","High Text Markup Language","Hyper Tabular Marku Language"],
          "index": "2",
          "correct": "Hyper Text Markup Language",
          "qustype":"mcq",
          "ans": ""
        },
        {
          "q": "3.which of the following tag is used to mark a begining of paragraph ?",
          "options": ["TD", "br", "P"],
          "index": "3",
          "correct": "P",
          "qustype":"mcq",
          "ans": ""
        },
        {
          "q": "4.From which tag descriptive list starts ?",
          "options": ["LL", "DL", "DD"],
          "index": "4",
          "qustype":"mcq",
          "correct": "DL",
          "ans": ""
        },
        {
          "q": "5.Correct HTML tag for the largest heading is _____",
          "options": ["h1", "h6", "heading"],
          "correct": "h1",
          "index": "5",
          "qustype":"mcq",
          "ans": ""
        },
        {
          "q": "1.The common element which describe the web page, is ?",
          "correct": "Heading",
          "qustype":"blanks",
          "ans": ""
        },
        {
          "q": "2.HTML stands for?",
          "correct": "Hyper Text Markup Language",
          "qustype":"blanks",
          "ans": ""
        },
        {
          "q": "3.which of the following tag is used to mark a begining of paragraph ?",
          "correct": "P",
          "qustype":"blanks",
          "ans": ""
        },
        {
          "q": "4.From which tag descriptive list starts ?",
          "correct": "DL",
          "qustype":"blanks",
          "ans": ""
        },
        {
          "q": "5.Correct HTML tag for the largest heading is _____",
          "correct": "h1",
          "qustype":"blanks",
          "ans": ""
        },
        {
          "q": "1.The common element which describe the web page, is ?",
          "options": ["heading","paragraph", "None of these"],
          "index": "1",
          "correct": ["heading","paragraph"],
          "qustype":"check",
          "ans": []
        },
        {
          "q": "5.Correct HTML tags",
          "options": ["h1","h6","None of the above"],
          "correct":[ "h1","h6"],
          "index": "5",
          "qustype":"check",
          "ans": []
        }
       
      ]
      
}`
let A = JSON.parse(B);
 A = A.questions;
let M = [];
let FILL = [];
let check=[];
A.forEach((item) => (item.qustype=='mcq')? M.push(item): (item.qustype=="blanks")?FILL.push(item):check.push(item)
  
);
let C = [M,FILL,check];
export default C;