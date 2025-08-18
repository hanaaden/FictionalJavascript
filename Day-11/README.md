# Day-11
# more about async 

# closure 
A closure happens when a function “remembers” the variables from the place it was created, even if it’s called later, outside that scope.
``` javascript
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is my delay");
  }, ms);
});
```
setTimeout takes an arrow function.

That arrow function uses resolve.

resolve is not defined inside the arrow function — it comes from the outer Promise function.

The arrow function “remembers” resolve even though it runs later, after ms milliseconds.

That’s a closure: the inner function closes over the outer function’s variables.

Any function can form a closure if it accesses variables from its outer scope.

Closures let you preserve state between calls or across async operations.

In async JS (setTimeout, Promises, event handlers, fetch), closures are extremely common because callbacks often run later.

``` Js 
const getPost = async ()=>{
  try{
    const URL = "https://jsonplaceholder.typicode.com/posts/1"
    const res = await fetch(URL)
  const Data = await res.json()
  const great = ()=>{
    console.log(Data)
  }
  console.log("loading............")
  setTimeout(great, 2000)
  }catch(error){
    console.error("error Happened hana",error.message)
  }

  
}
``` 
The “great” function
`const great = () => { console.log(Data) }`


This is a normal function (not async).

It remembers Data because of a closure.

Even though the function runs later (after 2 seconds), it “remembers” the Data variable.
