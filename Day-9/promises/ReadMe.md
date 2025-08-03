Promise Object Properties
# A JavaScript Promise object can be:

 **Pending:** This state represents the initial state of the promise. It is neither fulfilled nor rejected.
**Fulfilled:** This state represents that the asynchronous operation has successfully completed, and the promise has resolved with a value.
**Rejected:** This state represents that the asynchronous operation has failed, and the promise has rejected with a reason (error).
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

```javascript
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

```

# promise chaining 
Promise chaining allows you to execute a series of asynchronous operations in sequence. It is a powerful feature of JavaScript promises that helps you manage multiple operations, making your code more readable and easier to maintain.

Allows multiple asynchronous operations to run in sequence.
Reduces callback hell by eliminating deeply nested functions.
Each then() returns a new promise, allowing further chaining.
Error handling is easier with a single .catch() for the entire chain.
```javaScript
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
```

# promise all
The Promise.all() method is one of the promise concurrency methods. It can be useful for aggregating the results of multiple promises. It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.

```javascript
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
```

It waits until all promises in the array have resolved

Then it returns their values in the same order as the array you passed: [t, u, v]
