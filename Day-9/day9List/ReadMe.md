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
