
javascript is dynamic typed while typescript is static typed 
means typecript allows explicit type if declaration for variable etc while javascript is variables 
determined at runtime and there is flexibility 
JS is interpreted while TS is compiled 
TS offers error detection

Number → 42

String → 'hello'

Boolean → true / false

undefined → a variable declared but not assigned

null → intentional absence of any object value

BigInt → large integers beyond 2^53 - 1

Symbol → unique and immutable identifier

== vs ===
the (==) loose equality : this one uses 
type coericon before comparing value 
means if they have different datatypes 
it converts one or both and then compares 
means 5=="5" display true becouse it changed 
the 5 string into a number 
while 

the (===) the strick equality: this one 
dont allow coericon means it compares the value
and datatype without converting the datatype 
5==="5" will display false 
the datatype are different so they are not 
equal 

ternary operator is shortcut way for writing simple if-else statements it is 
also called a conditional operatorbecouse it works based on condition 
ternary operator allows you to quick decide between two values depending on the condition 
syntax:
condition ? trueExpression: falseExpression 

the best way to declare varaible is to use Let and const since var is old version 
=======
TypeScript is known as an Object-oriented 
programming language whereas JavaScript
 is a prototype-based language.

TypeScript has a feature known as 
Static typing but JavaScript does not 
support this feature

TypeScript supports Interfaces but 
JavaScript does not.

when to stick js
Simplicity and Speed
popularity

**var** declares variables with function or global scope and allows re-declaration and updates within the same scope.
 It is function-scoped or globally scoped, depending on where it's declared.
**let** declares variables with block scope, allowing updates but not re-declaration within the same block.
 It is block-scoped, meaning the variable is only accessible within the block where it is declared.
**const** declares block-scoped variables that cannot be reassigned after their initial assignment.
 It cannot be updated or re-declared within its scope.

let is block scope
**Hoisting**: Hoisted but not initialized, so accessing it before declaration results in a ReferenceError.
paractices: for variables that need to be reassigned.

========================================

var is function scope
Hoisting: var are hoisted to the top of their scope and initialized as undefined.
paractice  Generally avoided in modern JavaScript

========================================

 const is block scoped
Hoisting: Hoisted but not initialized, so accessing it before declaration results in a ReferenceErro
for variables that should not be reassigned.

========================================

scope refers how varaibles,objects and functions are accesible 
= function scope is varaible declered within the function\
they are only accesible within function


function myfun(){
    var local = 100
    console.log("the local variable is " + local)
}

if we console console.log(local) now here it will give error
myfun()

 = block scope Variables declared with let or const
 inside a block like within {}  are only accessible within that block.
{
    let block = "I am block"
    console.log(block)
}
 if we console console.log(block) now here it will give error
