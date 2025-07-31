
names = (name) => {
    console.log(`Hello ${name}`)
} 
caller = (num1 , num2 , callback) =>{
    callback('def')
    console.log(num1 * num2) 
    
}

caller(6,4,names)

calc = (a,b) =>{
    return a + b 
}
calculate = (num3 , num4 , callback) =>{
     return callback(num3,num4)
}
console.log(calculate (3,4,calc))

// Write a function called processText that:

// Takes two arguments:

// text (a string)

// callback (a function)

// Inside processText, call the callback and pass the text to it.

// The callback should transform the text in some way (e.g., uppercase, reverse).

processText = (nam , callback) =>{
    callback(nam)
}
texter = (nem) =>{
   console.log(nem.toUpperCase())
}
processText("Hana" , texter)

// Create a function doubleProcess that:

// Takes three arguments:

// num1

// num2

// callback

// Calls callback(num1, num2) two times:

// First time: print the sum

// Second time: print the product

// You need to write different callback functions for addition and multiplication.



calce = (c ,d)=>{
    console.log( "addition: " , c + d )
    console.log( "multiply: " , c * d )
}

doubleProcess = (g , h , callback)=>{
    callback(g,h)
}
doubleProcess(3,9,calce)