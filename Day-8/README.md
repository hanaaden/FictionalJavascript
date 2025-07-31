# Day-8
# async JavaScript
enables your program to start a potentially long-running task while that task runs, rather than having to wait until that task has finished. 
asynchronous. For example:

Making HTTP requests using fetch()
Accessing a user's camera or microphone using getUserMedia()
Asking a user to select files using showOpenFilePicker()

`const name = "Miriam";`
`const greeting = ``Hello, my name is ${name}!``;`
`console.log(greeting);`

Declares a string called name.
Declares another string called greeting, which uses name.
Outputs the greeting to the JavaScript console.

We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines.

### Event handlers
 Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens. 

 ### call backs 
 A callback is a function passed as an argument to another function
 with the expectation that the callback will be called at the appropriate time.
 callbacks used to be the main way asynchronous functions were implemented in JavaScript

 ### code is practiced in the DAY 8 index.js

 ### promises 
 Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.