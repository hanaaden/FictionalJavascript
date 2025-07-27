# Functions
Functions are a great
 building block that will reduce the amount of code you will need in your
 app. You can call a function whenever you need it, and you can write it as a
 kind of template with variables. So, depending on how you've written it,
 you can reuse it in many situations

### Remember 
`console.log() `,  `push()` , and `prompt()` ,` sort()` for arrays? These are all functions.

### Invoking functions
invoking function with no argument
`nameOfTheFunction(); `
invoking function with argument
`functionThatTakesInput("the input", 5, true);`

### writinng a function
`function nameOfTheFunction() { //content of the function } `
we call that fnctio as follow 
 `nameOfTheFunction()`; 

## parameters and argumenents 
A parameter is defined as the variable listed inside the parentheses of the
 function definition
 `function addTwoNumbers(x, y) { `
 ` console.log(x + y); `
`} `
x and y are parameters 
When called, this function will simply add the parameters and log the
 result. However, to do this, we can call the function with arguments:
When called, this function will simply add the parameters and log the
 result. However, to do this, we can call the function with arguments:
 `addTwoNumbers(3, 4);`
 What happens if we call our 
addTwoNumbers() function without any
 arguments? 
` addTwoNumbers(); `
 JavaScript just
 gives the variables a default type, which is undefined

 # arrow functions
 Arrow functions are a special way of writing functions that can be
 confusing at first. Their use looks like this:
` (param1, param2) => body of the function; `
Or for no parameters:
` () => body of the function;` 
Or for one parameter (no parentheses are needed here):
 `param => body of the function; `
Or for a multiline function with two parameters:
` (param1, param2) => { `
`// line 1;` 
`// any number of lines;` 
`};`

### recursion
you want to call the same function from inside the function

### Anonymous functions
 So far, we have been naming our functions. We can also create functions
 without names if we store them inside variables. We call these functions
 anonymous