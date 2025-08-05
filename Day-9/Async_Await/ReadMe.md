# are used to simplify handling 
asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.


The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.
The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.

async makes a function always return a Promise

await pauses code execution inside an async function until the Promise resolves

await can only be used inside async functions

JavaScript doesn’t wait — it keeps running. So we need ways to wait without freezing the app. That’s where async/await comes in


***await*** doesn’t care if the Promise resolves or rejects.

If it resolves, you get the value.

If it rejects, it throws an error — and that’s what try...catch handles.