// Print the message “Hello after 4 seconds” after 4 second
hello = ()=>{
   console.log("hello after 4 seconds")
}

setTimeout(hello , 4* 1000)


// repeating every second
setInterval(function greet() {
    console.log("Welcome to GeeksforGeeks!");
}, 1000);

//canceling 
const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);
clearTimeout(timerId);

task

let i = 0
   
   
    
 const timer = setInterval( () => {
        console.log("hello world")
        i++
        if (i === 5){
            clearInterval(timer)
        }
    }, 1000);
    

for (let n = 0 ; n <3 ; n++){
setTimeout(()=>{
    console.log("hello world")

}, n * 1000)
}

    
        
    
  

    
