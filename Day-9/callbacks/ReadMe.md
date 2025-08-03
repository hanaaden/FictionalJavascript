#  Timers
Timer functions are implemented by browsers and their implementations will be different among different browsers. 

### Delaying the execution of a function
Timer functions are higher-order functions that can be used to delay or repeat the execution of other functions (which they receive as their first argument).

```
setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);
```
# Understanding Callbacks and Callback Hell in JavaScript
callbacks are used for handling operations like reading files and making API requests. 
When there is excessive nesting of the functions it leads to a problem known as the callback hell. 
it becomes difficult to read the code, debug, and maintain. But when we implement the promises and async/await it helps in improving the code


**Callback Hell** in JavaScript can be defined as the situation where we have nested callbacks(functions passed as arguments to other functions) which makes the code difficult to read and debug

```javascript
function fetchData(callback) {
    console.log('Data fetched');
    callback();
}

function processData(callback) {
    console.log('Data processed');
    callback();
}

function displayData() {
    console.log('Data displayed');
}

// Callback Hell
fetchData(function () {
    processData(function () {
        displayData();
    });
});
```

