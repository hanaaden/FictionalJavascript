//creating first function
function calc (x,y){
    console.log('we are adding ' , x , ' to ' , y , ' so the answer is ',  x + y)
   
}
calc(4,9)

//Create a function that takes two parameters, adds the parameters together, and returns the result.
function taker (a , b){
    return a + b
}
console.log(taker(2 , 8))

// normal function to arrow function
function names (x){
    return x
}
console.log(names('abdi'))
// arrow function
let namess =  x  => (x)
console.log(namess("ahmed"))

// another 
function checker(name , age ){
    return name +  age
}
console.log(checker("john " ,23))
//arrow
let checker1 = (name , age ) =>{
    return name  + age 
}
console.log(checker1("mike " , 34))

// recursion 
function logRecursive(nr) { 
  console.log("Started function:", nr); 
  if (nr > 0) { 
    logRecursive(nr - 1); 
  } else { 
      console.log("done with recursion"); 
  } 
  console.log("Ended function:", nr); 
} 
logRecursive(3); 

// Nested functions
let outer = (y) =>{
    console.log("wanna create a a nested function")
    let innerfun = (x)=>{
        console.log(x + 6)
        console.log("used the parrent function  " , y)
    }
    innerfun(y)
}
outer(4)
// Set a variable name and assign a function to it. Create a function
 // expression with one parameter that outputs a provided argument to the
 //console

 let unknown = function(c){
    return c
 }
 console.log(unknown(7))