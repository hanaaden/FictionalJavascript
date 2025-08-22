# Day-13
# Today is for advanced Arrays and objects 

# 📝 JavaScript Loops – Beginner Notes

This note explains the different types of loops in JavaScript: `for`, `for of`, `forEach`, and `for in`.
It includes simple examples, real-life analogies, and key differences.

---

## 1️⃣ `for` Loop – Classic Counting Loop

```js
let nums = [10, 20, 30];

for (let index = 0; index < nums.length; index++) {
    console.log(nums[index] ** 2);
}
```

* **How it works:**

  * Start counting from index 0
  * Continue while `index < nums.length`
  * Access the value using `nums[index]`
* **Output:**

```
100
400
900
```

* **Use case:** When you need full control over the index, skip items, or go backwards.

**Real-life analogy:** Walking along a line of boxes, counting each one, and doing something with each.

---

## 2️⃣ `for of` Loop – Loop Through Values

```js
for (let num of nums){
  console.log(num);
}
```

* **How it works:**

  * `num` is a **temporary cup** holding each value one by one
  * Loops through array or other iterables directly
* **Output:**

```
10
20
30
```

* Can use `break` or `continue`
* Works on arrays, strings, sets, maps, etc.

**Real-life analogy:** Picking fruits from a basket one by one. You can stop whenever you want.

---

## 3️⃣ `forEach` – Run a Function for Each Item

```js
nums.forEach((num, index) => {
  console.log(index, num);
});
```

* **How it works:**

  * Executes a function for every item in the array
  * `num` = current value (temporary cup)
  * `index` = position of the item
* **Output:**

```
0 10
1 20
2 30
```

* Cannot `break` or `continue`
* Works **only on arrays**.

**Real-life analogy:** Washing all fruits on a conveyor belt — every item must be processed.

---

## 4️⃣ `for in` – Loop Through Keys / Indexes

```js
let student = {name: "Ali", age: 15, grade: "9th"};

for (let key in student) {
    console.log(key, ":", student[key]);
}
```

* **How it works:**

  * `key` stores the property name (or array index)
  * `student[key]` gives the corresponding value
* **Output:**

```
name : Ali
age : 15
grade : 9th
```

* Mainly used for objects, can also loop through array indexes.

**Real-life analogy:** Reading all labels on a student card — each label is the key, and its value is what’s written on it.

---

## 🔑 Key Differences

| Loop      | Gives You     | Use Case                                     |
| --------- | ------------- | -------------------------------------------- |
| `for`     | Index & value | Full control over counting, skip, or reverse |
| `for of`  | Value only    | Read every item easily                       |
| `forEach` | Value & index | Run a function on every array item           |
| `for in`  | Index/keys    | Loop through object properties               |



## 💡 Notes

* **`num` is always temporary** in `for of` and `forEach`. It holds only the current value during that iteration.
* **Bracket notation**: `object[key]` works with variables or strings.
* **Dot notation**: `object.name` works only with known property names.
* **`for of` vs `forEach`**:

  * `for of` → Can break or continue; works on iterables
  * `forEach` → Cannot break; works on arrays only





**map takes an array**→ creates a new array by applying a function to each element

Original array is not changed

**filter tests each element** → returns a new array of elements that pass the test

Original array does not change

**reduce loops** through array → combines elements into a single value

You control how the combination happens

Has accumulator (acc) + current element (curr)


# 🧠 Array Checkers & Searchers

We’ve mastered looping, transforming, filtering, reducing.
Now let’s focus on **searching & checking** arrays.

---

## 1️⃣ `some()`

* Checks if **at least one element** passes a condition.
* Returns **true/false**.

```js
let nums = [5, 12, 18, 7, 3, 25];

console.log(nums.some(n => n > 20)); // true (25 is > 20)
console.log(nums.some(n => n < 0));  // false (no negatives)
```

---

## 2️⃣ `every()`

* Checks if **all elements** pass a condition.
* Returns **true/false**.

```js
let nums = [5, 12, 18, 7, 3, 25];

console.log(nums.every(n => n > 0));  // true (all positive)
console.log(nums.every(n => n > 10)); // false (5, 7, and 3 fail)
```

---

## 3️⃣ `find()`

* Returns the **first element** that matches the condition.
* If none match → returns `undefined`.

```js
let nums = [5, 12, 18, 7, 3, 25];

console.log(nums.find(n => n > 10)); // 12
console.log(nums.find(n => n < 0));  // undefined
```

---

## 4️⃣ `findIndex()`

* Returns the **index** of the first element that matches the condition.
* If none match → returns `-1`.

```js
let nums = [5, 12, 18, 7, 3, 25];

console.log(nums.findIndex(n => n > 10)); // 1 (12 is at index 1)
console.log(nums.findIndex(n => n < 0));  // -1
```

---

## 💡 Quick Summary Table

| Method        | Returns | Example                 |
| ------------- | ------- | ----------------------- |
| `some()`      | Boolean | At least one passes?    |
| `every()`     | Boolean | Do all pass?            |
| `find()`      | Value   | First match             |
| `findIndex()` | Index   | Position of first match |

# 🧠 JavaScript Rest & Destructuring

This note explains **rest parameters** and **destructuring** in JavaScript with beginner-friendly examples and explanations.

---

## 1️⃣ Rest Parameters

* Rest parameters allow you to **collect all remaining elements** into an array.
* Denoted by `...` before a parameter name.

```js
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(4, 5, 6, 7));   // 22
```

* **Analogy:** Like putting leftover fruits into a basket — all remaining items are collected.

---

## 2️⃣ Array Destructuring

* Assign values from an array to variables in **one line**.

```js
let fruits = ['apple', 'banana', 'cherry'];
let [first, second, third] = fruits;

console.log(first);  // apple
console.log(second); // banana
console.log(third);  // cherry
```

* Can skip elements using commas:

```js
let [ , , thirdFruit] = fruits;
console.log(thirdFruit); // cherry
```

* Combine with **rest** to collect remaining elements:

```js
let [firstFruit, ...restFruits] = fruits;
console.log(firstFruit); // apple
console.log(restFruits); // ['banana', 'cherry']
```

---

## 3️⃣ Object Destructuring

* Assign object properties to variables using `{ }`:

```js
let student = { name: 'Ali', age: 15, grade: '9th' };
let { name, age } = student;

console.log(name); // Ali
console.log(age);  // 15
```

* Can rename variables:

```js
let { name: studentName, grade } = student;
console.log(studentName); // Ali
console.log(grade);       // 9th
```

* Combine with **rest** to collect remaining properties:

```js
let { name, ...otherInfo } = student;
console.log(name);       // Ali
console.log(otherInfo); // { age: 15, grade: '9th' }
```

---

## 💡 Notes

* **Rest**: `...` collects remaining items (arrays or objects).
* **Destructuring**: Extract values from arrays or objects into variables.
* Can use together for cleaner, shorter code.

---

**End of Notes**
This is a beginner-friendly guide for understanding **rest parameters and destructuring** in JavaScript.


