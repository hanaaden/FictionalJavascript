const button = document.getElementById("button")
const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")
const button3 = document.querySelector(".btn3")
const button4 = document.querySelector(".btn4")
const question = document.getElementById("question")
const container = document.querySelector(".container")
let questions = [
 
  {
    "ques": "What is the main difference between let and const?",
    "a": "let can be redeclared, const cannot",
    "b": "let can be reassigned, const cannot",
    "c": "const is faster",
    "d": "They are the same"
  },
  {
    "ques": "What does \"Hello\".length output?",
    "a": "4",
    "b": "5",
    "c": "6",
    "d": "undefined"
  },
  {
    "ques": "How do you get the last element of an array?",
    "a": "fruits.last()",
    "b": "fruits[-1]",
    "c": "fruits[2]",
    "d": "fruits[fruits.length - 1]"
  },
  {
    "ques": "What is an arrow function?",
    "a": "A function that shoots arrows",
    "b": "A shorter syntax for writing functions",
    "c": "A function that only works in loops",
    "d": "A function that runs automatically"
  },
  {
    "ques": "Which code correctly prints numbers 1 to 5?",
    "a": "for (let i = 1; i <= 5; i++) { console.log(i); }",
    "b": "for (let i = 0; i < 5; i++) { console.log(i); }",
    "c": "for (let i = 1; i < 5; i++) { console.log(i); }",
    "d": "console.log(1,2,3,4,5)"
  },
  {
    "ques": "What does document.getElementById('myDiv') return?",
    "a": "A CSS class",
    "b": "A string with the element's text",
    "c": "The HTML element with that ID",
    "d": "Nothing"
  },
  {
    "ques": "Which event is triggered when a button is clicked?",
    "a": "hover",
    "b": "input",
    "c": "click",
    "d": "keypress"
  },
  {
    "ques": "What's the difference between == and ===?",
    "a": "No difference",
    "b": "== compares only values, === compares value and type",
    "c": "== is faster",
    "d": "=== is only used with strings"
  },
  {
    "ques": "What does console.log() do?",
    "a": "Sends data to a printer",
    "b": "Writes data to the console",
    "c": "Logs into a databaser",
    "d": "Clears the screen"
  }
];

let answers = [
  "String",
  "let can be reassigned, const cannot",
  "5",
  "fruits[fruits.length - 1]",
  "A shorter syntax for writing functions",
  "for (let i = 1; i <= 5; i++) { console.log(i); }",
  "The HTML element with that ID",
  "click",
  "== compares only values, === compares value and type",
  "Writes data to the console"
];

let scores = 0
button1.addEventListener("click" , ()=>{
   if (answers.includes(button1.innerHTML)){
         button1.style.backgroundColor = "green"
       button2.style.backgroundColor = "red"
       button4.style.backgroundColor = "red"
       button3.style.backgroundColor = "red"
       scores++
   }else {
     button1.style.backgroundColor = "red"
   }
})

button2.addEventListener("click" , ()=>{
   if (answers.includes(button2.innerHTML)){
        button2.style.backgroundColor = "green"
       button1.style.backgroundColor = "red"
       button4.style.backgroundColor = "red"
       button3.style.backgroundColor = "red"
       scores++
   }else {
        button2.style.backgroundColor = "red"
   }
})

button3.addEventListener("click" , ()=>{
   if (answers.includes(button3.innerHTML)){
       button3.style.backgroundColor = "green"
       button1.style.backgroundColor = "red"
       button2.style.backgroundColor = "red"
       button4.style.backgroundColor = "red"
       scores++
   }else{
    button3.style.backgroundColor = "red"
   }
})

button4.addEventListener("click" , ()=>{
   if (answers.includes(button4.innerHTML)){
         button4.style.backgroundColor = "green"
       button1.style.backgroundColor = "red"
       button2.style.backgroundColor = "red"
       button3.style.backgroundColor = "red"
       scores++
   }else {
      
       button4.style.backgroundColor = "red"
   }
})
  
 let i = 0

button.addEventListener("click" ,() =>{
         
   if ( i >= questions.length){
    question.textContent = "the quiz is over"
    button.style.display = "none"
    button1.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
    button4.style.display = "none"
    let score = document.createElement("p")
    score.classList.add("score")
    score.textContent = `score:  ${scores}`
    container.appendChild(score)
    let feedback = document.createElement("p")
    feedback.classList.add("feedback")
    container.appendChild(feedback)
    if (scores<=3){
       feedback.textContent = "you need to discover alot"
       feedback.style.color = "red"
    }else if (scores <= 7){
        feedback.textContent = "you are doing well"
        feedback.style.color = "orange"
    }else{
        feedback.textContent = "excellent you did it"
        feedback.style.color = "green"
    }
   }else{
                  button4.style.backgroundColor = "#717671"
       button1.style.backgroundColor = "#717671"
       button2.style.backgroundColor = "#717671"
       button3.style.backgroundColor = "#717671"
       
       question.textContent = `${questions[i].ques}`
       button1.textContent = `${questions[i].a}`
       button2.textContent = `${questions[i].b}`
       button3.textContent = `${questions[i].c}`
       button4.textContent = `${questions[i].d}`
       
i = i + 1
   }
       
})
  