// processName = (name , callback) =>{
//       console.log( callback(name))
// }
// namer = (names) =>{
//     let upper = names.toUpperCase()
//     return  `hello ${upper}`
// }

// processName("john " , namer)

// const delayedGreeting = (name, callback) => {
//   setTimeout(() => {
//     callback(name);
//   }, 2000);
// };

// const nem = (nu) => {
//   console.log(`Hello, ${nu}!`);
// };

// delayedGreeting("Alice", nem);


// processNumbers = (numbers, callback) =>{
//     callback(numbers)
// }
// doubler = (r) =>{
//     for(let i = 0 ; i <r.length ; i++){
//         let n = r[i] * 2
//         console.log(n)
//     }  
// }
// processNumbers([1,2,3] , doubler)

delayedProcess =(numbers, callback) =>{
     
    callback(numbers);
 
}

delayer = (num) =>{
    for(let i = 0 ; i < num.length ; i++){
        
             setTimeout( delay =()=>{
         console.log(`the number is ` , num[i])
        }, 2000)
        
    }
       
    
}
delayedProcess([1,2,3] , delayer)