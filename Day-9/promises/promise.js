let p = new Promise((accept , reject) =>{
    let x = 10
    if (x == 9){
        accept("success")
    }else{
        reject("failed")
    }
})

p.then((message)=>{
    console.log("then messaged : " , message)
}).catch((message)=>{
    console.log("catches the error : " , message  )
})


// Write a promise that resolves with the message "Resolved after 2 seconds" after a 2-second delay.
// Use .then() to log the message.

let x = new Promise ((accept) =>{
    setTimeout(()=>accept("Resolved after 2 seconds"),2000)
    
})

x.then((messa) =>{
    console.log(messa)
}).catch((messa)=>{
    console.log(messa)
})

checkNumber =(num)=>{
  return new Promise( (accept , reject)=>{
     
     if (num%2 == 0){
        accept("even number")
     }else{
        reject("odd number")
     }
})
} 
checkNumber(20).then((mer)=>{
    console.log(mer)
}).catch((mer)=>{
    console.log(mer)
})

// promise chaining 
task = (messsage , delay)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(messsage)
            resolve()
        } , delay)
    })
}
task("task 1 completed" , 1000)
     .then(()=>{
        task("task 2 completed" , 2000)
     })
     .then(()=>{
        task("task 3 is completed" ,3000)
     })

//examples
new Promise  ((resolve , reject)=>{
    resolve(5)
    if (isNaN){
        reject()
    }
})

.then((num)=>{
    let result = num *3
    console.log(`if we multiply ${num} to 3 it will be ${result}` )
    return num = result
})
.then((num)=>{
    let res = num -1 
    console.log(` when we subtract 1 from the ${num} it will be ${res}` )
     return  num = res
})
.then((num)=>{
    let rese = num +5 
    console.log(` when we add 5 from the ${num} it will be ${rese}` )
     return  num = rese
})
.then((num)=>{
    console.log(`the number now is ${num}`)
})
.catch(()=>{console.log("error happen")})


let t = new Promise ((resolve ,reject)=>{
    setTimeout(()=>{
        resolve(7)
    } , 1000)
})
let u = new Promise((resolve, reject) => {
    resolve(5)
})

let v = new Promise((resolve, reject) => {
    resolve("loo")
})

Promise.all([t,u,v]).then((value)=>{
    console.log("the value" , value)
})