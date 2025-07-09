
function myfun(){
    var local = 100
    console.log("the local variable is " + local)
}

// if we console console.log(local) now here it will give error
myfun()

// = block scope Variables declared with let or const
//  inside a block like within {}  are only accessible within that block.
{
    let block = "I am block"
    console.log(block)
}
// if we console console.log(block) now here it will give error

let num1 = 10;
let num2 = 5;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;
console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)
console.log(remainder)

if(num1 === num2){
    console.log(true)
}else{
    console.log(false)
}

if(num1>0 && num2>0){
    console.log('yeah greater')
}else{
    console.log('no greater')
}

var grade = "Enter your Grade A B C D or F"

switch(grade){
    case 'A':
        alert("Excellent")
        break
    case 'B':
        alert("Very good")
        break
    case 'C':
        alert("good")
        break
    case 'D':
        alert("you passed")
        break
    case 'F':
        alert("Failed")
        break
}

console.log("for loop")

for(i=0;i<10;i++){
    console.log(i)
}

console.log("while loop")

i = 0
while(i<10){
    console.log(i)
    i++
}

console.log("do while loop")
i = 0
do{
    console.log(i)
    i++
}while(i<10)