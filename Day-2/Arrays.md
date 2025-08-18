# ARRAYS

Arrays are lists of values. These values can be of all data types and one
 array can even contain different data types. It is often very useful to store
 multiple values inside one variable; for exa

 what happens if you define an
 array using 
const . You can change the values of a constant array, but you
 cannot change the array itself.

What do you think will happen if we use a negative index or an index that is
higher than the number of values we get?

## create Array 
cars = ["toyota", "Tesla" , "BMW"]
console.log(cars[-1]) -- ** undefined **
We didn't assign a value to the negative or non-existent index, so when we
ask for it, the value is undefined.

## OVERWRITTING ARRAYS 

The elements in an array can be overwritten. This can be done by accessing
a certain element using the index and assigning a new value

cars[0]="Suzuki"
console.log(cars)

the output will be ["Suzuki", "Tesla" , "BMW"]

## Built-in length property

This will return the
number of values that the array
console.log(cars.length) //3


push()
🔹 What it does:
Adds one or more elements to the end of the array.

unshift()
🔹 What it does:
Adds one or more elements to the beginning of the array.

pop()
🔹 What it does:
Removes the last element from the array.

shift()
🔹 What it does:
Removes the first element from the array.

🔹 includes(value)
Returns true if the array contains the value.

🔹 indexOf(value)
Returns the index of the value (or -1 if not found).

🔹 find(callback)
Returns the first item that matches a condition.

## Practice exercise 
1. Create an array to use as your shopping list with 3 items: "Milk,"
"Bread," and "Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.


## ARRAYS METHODS
1: Adding and replacing elements
cars.push("Mercedes")
console.log(cars) 
it will display  ["Suzuki", "Tesla", "BMW" , "mercedes"]

But what if you would want to add elements at a
certain index? You can use the splice() method. 

cars.splice(2,0,"chevrolet")
console.log(cars)
this will display ["toyota", "Tesla" ,"Chevrolet" , "BMW" , "mercedes"]
The first parameter, 2 in our case, is the index of the array on
which we want to start inserting. The second parameter, 0 in our case, is the
number of elements we want to delete starting at our previously defined
starting index. 

you  can also add another array to your array. This can be done with the
concat() method.
let arr = [1,2,3]
let arr1 = [4,5,6]
let arr2 = arr.concat(arr1)
console.log(arr2)
this will display [1,2,3,4,5,6]

to delete you will use pop 
you can delete elements from an array.
Removing the last element is done with pop() :

Deleting the first element can be done with shift()

you can also delete by using splice()

## finding array by using 
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);

In this case, the value of findIndex3 will be -1, because 6 cannot be found in index 2

## SORTING 

It sorts numbers from
small to high and strings A-Z. You can call sort() 
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names)

The elements of the array can be reversed by calling the built-in method,
reverse() 
names.reserve();
console.log(names)

## Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk , Bread , and Apples to your list.
3. Update " Bread " with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk .
7. After Bananas , add Carrots and Lettuce .
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice"],


## Array methods
### push()
The push method returns the new length of the array
`favoriteFruits = ["grapefruit", "orange", "lemon"]; `
`favoriteFruits.push("tangerine");`
Here is the new array:
 [ 'grapefruit', 'orange', 'lemon', 'tangerine', 'lime' ] 


 # Multidimensional arrays

we can create an array of already existing arrays. This is called a two
dimensional array
`let someValues1 = [1, 2, 3]; `
`let someValues2 = [4, 5, 6]; `
`let someValues3 = [7, 8, 9]; `
`let arrOfArrays = [someValues1, someValues2, someValues3];`

If you want to access elements of the inner arrays
let value1 = arrOfArrays[0][1]; 

# Objects in JavaScript
Objects are not too dissimilar to real-world objects. They have properties
 and they can perform actions, methods.
  `let arr = [0, 1, 2];` 
   `console.log(typeof arr);`
The output of the preceding code is as follows:
 Object

 `let dog = {`
    `dogName : "JS",`
    `weight : 23,`
    `color: "brown"`,
    `age : 40`
 `}`

 We created a variable, 
dog , and we gave this an object as a value. We can
 recognize that this is an object by seeing the { and }. In between the curly
 braces, we see a bunch of properties and their values.
 If you have ever wondered whether something should be a property, just try
 the following template sentence in your head:
 *objectname* has a(n) *property name*

### accessing
 We can access the properties of this object
 `let dogColor1 = dog["color"]; `
 or
  `let dogColor2 = dog.color; `
### updating 
`dog["color"] = "blue"; `
`dog.weight = 2.3; `
`console.log(dog); `


