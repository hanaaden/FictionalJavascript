Promise Object Properties
# A JavaScript Promise object can be:

  - Pending
 - Fulfilled
 - Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

``` 
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```