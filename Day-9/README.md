# Day-9
# asynchronous JavaScript
Functions or operations running parallel with the other functions or operations are called asynchronous functions or operations in JavaScript. 
 Asynchronous JavaScript code requires Callback functions that get executed later after the desired time. 

 # JavaScript Call Stack

The **call stack** in JavaScript is a fundamental concept that helps the JavaScript engine manage the execution of functions.  
It works as a **stack data structure** (LIFO - Last In, First Out) to keep track of function calls and their execution order.

---

## Key Points

### 1. Function Execution Tracking
- When a function is invoked, it is **pushed** onto the top of the call stack.
- Once the function completes execution, it is **popped** from the stack.

### 2. Execution Flow
- The **currently executing function** is always at the top of the stack.
- If a function calls another function, the new function is added to the stack, and execution shifts to it.

### 3. Error Handling
- If the stack grows too large (e.g., due to **infinite recursion**), a **stack overflow** error occurs.

---

## Example

```javascript
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();
```



# javaScript Event Loop

What is the Event Loop?
The event loop is a continuously running process that monitors the call stack and the task queue, allowing JavaScript to perform non-blocking operations despite being a single-threaded language. This means that while one task is being executed, other tasks can be queued and executed once the current task is completed.

### Key Components of the Event Loop
`Call Stack`: This is where JavaScript keeps track of function calls. When a function is invoked, it is pushed onto the stack, and when it completes, it is popped off. This follows a Last In, First Out (LIFO) order.
Task Queue (Callback Queue): This queue holds tasks that are ready to be executed, typically resulting from asynchronous operations like setTimeout, DOM events, or AJAX requests. Tasks in this queue are processed in a First In, First Out (FIFO) order.

`Microtask Queue:` This is a special queue for microtasks, which include promise callbacks. Microtasks are processed before tasks in the task queue, ensuring that promise resolutions are handled promptly.
Web APIs: These are provided by the browser environment and include functionalities like timers, HTTP requests, and DOM manipulation. When an asynchronous operation is completed, its callback is added to the appropriate queue.

### How the Event Loop Works
The event loop continuously checks if the call stack is empty. If it is, it takes the first task from the task queue and pushes it onto the call stack for execution.
After executing a task, the event loop checks the microtask queue and processes all microtasks before moving back to the task queue.
This cycle continues, allowing JavaScript to handle multiple operations efficiently without blocking the main thread.
### Importance of the Event Loop
Understanding the event loop is crucial for writing performant and responsive JavaScript applications. It allows developers to manage asynchronous operations effectively, ensuring that the user interface remains responsive while background tasks are processed. This is particularly important in web applications where user interactions and data fetching occur simultaneously.
## Example
Consider the following code snippet:
```
console.log('Start');
setTimeout(() => {
console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
console.log('Promise Resolved');
});
console.log('End');
```
### Output:
Start
End
Promise Resolved
Timeout

In this example, the setTimeout callback is added to the task queue, while the promise resolution is added to the microtask queue. The promise callback executes before the timeout callback because microtasks are processed first.




The **event loop** is a fundamental concept in JavaScript that enables **asynchronous programming** while maintaining its **single-threaded** nature.  
It ensures that non-blocking operations (such as I/O tasks or timers) are executed efficiently **without freezing the main thread**.



## How It Works

1. **Call Stack**  
   - JavaScript uses a **call stack** to manage function execution.  
   - When a function is invoked, it gets **pushed** onto the stack.  
   - Once it finishes, it is **popped** off the stack.

2. **Web APIs**  
   - Asynchronous tasks (e.g., `setTimeout`, HTTP requests) are **delegated to Web APIs** (in browsers) or other environments.
   - This frees the call stack to continue running other code.

3. **Callback Queue**  
   - Once an asynchronous task finishes, its **callback** is placed into the **callback queue**.

4. **Event Loop**  
   - The event loop **continuously checks** if the call stack is empty.
   - If it is, it **moves the first task from the callback queue** into the call stack for execution.

---

## Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
````

### Output:

```
Start
End
Async Task




## Key Points

* JavaScript is **single-threaded**, but the event loop allows it to handle **multiple tasks concurrently**.
* Tasks are categorized into:

  * **Macro-tasks** (e.g., `setTimeout`, `setInterval`)
  * **Micro-tasks** (e.g., Promises, `queueMicrotask`)
  * **Micro-tasks have higher priority** and are processed before the next macro-task.
* The event loop ensures **smooth execution** of tasks without blocking the main thread.






