in tailwind 
px- is to control the horizantal paddingg of element 
py - is to control the vertical padding of element
mx - is to control the horizantal margin of element
my- is to control the vertical margin of element


Function Declaration 

- A function declaration must have a function name.
- Function declaration does not require a variable assignment. 
- These are executed before any other code.
- The function in function declaration can be accessed before and after the function definition.
- Function declarations are hoisted

SYNTAX- 
Function FirstTry(par1, par1) {
}

Function Expression 

- A function expression is similar to a function declaration without the function name.
- Function expressions can be stored in a variable assignment.
- Function expressions load and execute only when the program interpreter reaches the line of code.
- The function in function expression can be accessed only after the function definition.

SYNTAX 
Var Function = function (par1,par2){
}

printHello()

function printHello() {
  console.log("hello")
}
We excute the printHello() before the line of functions was declared 
What happened was error 

It is because printHello() is declared in the global scope 

so the function is hoisted to the top of the global scope


printHello()

printDollar()

function printHello() {
  console.log('hello')

  function printDollar() {
    console.log("Dollar")
  }
}

Before printHello is declared in the code, we try to access it by
 executing printHello(). It's accessible (since it is hoisted to the top of 
 the global scope), so we have "hello" printed on the console.

But then we try to access printDollar, and we get a reference error:
 printDollar is not defined. Does hoisting not occur on printDollar?

Because it is declared in local scope

 In this case, it is declared in a local scope--in printHello. 
 Therefore, it would only be accessible in the function

printHello()

function printHello() {
  printDollar()
 
  console.log('hello')

  function printDollar() {
    console.log("Dollar")
  }
}

Now, we execute printDollar in printHello before the line where printDollar was 
actually declared. Since the function is hoisted to the top of the local scope, 
we're able to access it before the line where it was actually declared.

Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

Arrow functions do not have the prototype property like this, arguments, or super.
Arrow functions cannot be used with the new keyword.
Arrow functions cannot be used as constructors.


SYNTAX 

Traditional function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));

But the Arrow function is 

value = (a, b) => a * b;
console.log(value(3, 5));

CALLBACK FUNCTION  
-  Is function that is passed as argument to another function

sum(displayResult,3,5)

function sum(callback,x,y){
    let result = x + y
    callback(result)
}
function displayResult(result){
    console.log(result)
}