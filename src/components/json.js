const B = `{
  "Ques":[

  { "Q": "Addition of 22+33 ?",

    "options": [55, 66, 50, 60],

    "id":1,

    "score":1,

    "Ans": "55",

    "ans": "",

    "type":"mcq"

  },
  
  { "Q": "Evaluate of 11+12 ?",

   "score":2,

   "Ans": "23",

   "ans": "",

   "type":"fill"

  },
  { "Q" : "Find even values  ?",

    "options": [8,3,2,9] ,

    "id":1,

    "score":3,

    "Ans": [8,2],

    "ans": [],

    "type":"ms"

  },
 {

    "Q": "Substraction of 11-3 ?",

    "options": [7, 8, 9, 6],

     "id":2,

    "score":1,

    "Ans": "8",

    "ans": "",

    "type":"mcq"

  },

  {

    "Q": "Evaluate of -2-3 ?",

    "score":2,

    "Ans": "-5",

    "ans": "",

    "type":"fill"

  },
  { "Q":"Find odd values ?",

  "options": [8,3,2,9] ,

  "id":2,

  "score":3,

  "Ans": [3,9],

  "ans": [],

  "type":"ms"

},
  {

    "Q": "Multiplication of 9*2 ?",

    "options": [15, 18, 55, 16],

     "id":3,

    "score":1,

    "Ans": "18",

    "ans": "",

    "type":"mcq"

  },

  {

    "Q": "Evaluate of 2*3 ?",

    "score":2,

    "Ans": "6",

    "ans": "",

    "type":"fill"

  },
  { "Q":"5 greater then   ?",

  "options": [2,7,3,9] ,

  "id":3,

  "score":3,

  "Ans": [2,3],

  "ans": [],

  "type":"ms"

},
 {

    "Q": "Division of 10/2 ?",

    "options": [2, 3, 5, 6],

     "id":4,

    "score":1,

    "Ans": "5",

    "ans": "",

    "type":"mcq"

  },

  {

    "Q": "Evaluate of 7//2 ?",

    "score":2,

    "Ans": "3",

    "ans": "",

    "type":"fill"

  },
  { "Q":"11 less then   ?",

  "options": [12,7,13,9] ,

  "id":3,

  "score":3,

  "Ans": [12,13],

  "ans": [],

  "type":"ms"

},
  {

    "Q": "Mod of 5%3 ?",

    "options": [2, 3, 5, 1],

     "id":5,

    "score":1,

    "Ans": "2",

    "ans": "",

    "type":"mcq"

  },

  {

    "Q": "Evaluate of 2%3 ?",

    "score":2,

    "Ans": "2",

    "ans": "",

    "type":"fill"

  },
  { "Q":"Prime numbers   ?",

  "options": [2,7,3,9] ,

  "id":4,

  "score":3,

  "Ans": [2,7,3],

  "ans": [],

  "type":"ms"

}
 ]

}`;

let F = [];
let MS = [];
let M = [];

let A = JSON.parse(B);
A = A.Ques;
A.forEach((item) => (item.type == "mcq") ? M.push(item) : (item.type == "fill")? F.push(item): MS.push(item)
);
let c = [M,F,MS];
export default c;