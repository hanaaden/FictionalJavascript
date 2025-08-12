
//concept of loops 
let i = 0
while(i<10){
    console.log(i)
    i++
}
let g = 3

let arr = []; 
for (let i = 0; i < 5; i++) { 
  console.log(arr.push(i)) 
} 

// for each loop
console.log("the for-each loop")
const numbers = [1,2,3,4,5]
numbers.forEach(number =>{
   console.log(number)
})
const fruits = ["apple" , "berry" , "orange"]
fruits.forEach((fruit , index)=>{
  console.log( `${fruit} , ${index}` )
})
const num = [1,2,3,4]
num.forEach(function(numb , index , arr){
     arr[index] = numb * 2
})
console.log(num)