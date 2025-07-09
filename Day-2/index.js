sum(displayResult,3,5)

function sum(callback,x,y){
    let result = x + y
    callback(result)
}
function displayResult(result){
    console.log(result)
}


//return smallest of numbers given in parameter
console.log(Math.min(3,5,7))

//return greatest of numbers given in parameter
console.log(Math.max(8,9,78))

let rondomInt = Math.random(100)
console.log(rondomInt)