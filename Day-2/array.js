// creating array
let ar = [10]
console.log(ar)
// the type will be object
let ar2 = ["Hello" , 12 , true]
console.log(typeof ar2[0]) // string
console.log(typeof ar2[1]) //  number
console.log(typeof ar2[2]) // boolean

// accessing
console.log(ar2[0])

// changing constant value
const arrr = "hello world"
arrr[0] = "new value"
console.log(arrr[0]) // this is will change the value 
// arrr = ["new " , "value "] 
//TypeError: Assignment to constant variable.

//create Array 
cars = ["toyota", "Tesla" , "BMW"]
console.log(cars)
console.log(cars[-1])

//the output will be ["Suzuki", "Tesla" , "BMW"]
cars[0]="Suzuki"
console.log(cars)

//checking the length
console.log(cars.length) //3
//adding value 
cars.push("Mercedes")
console.log(cars)
// adding with index
cars.splice(2,0,"chevrolet")
console.log(cars)

// concat
let arr = [1,2,3]
let arr1 = [4,5,6]
let arr2 = arr.concat(arr1)
console.log(arr2)

//finding 
let arr8 = [12,10,5,2]
let findValue2 = arr8.find(e => e === 10);
let findIndex3 = arr8.indexOf(6, 2);
console.log(findValue2);
console.log(findIndex3)

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names)

// 2d
let array1 = [1,2,3]
let array2 = [1,2,3]
let array3 = [1,2,3]
let array4 = [array1,array2,array3]
console.log(array4)
console.log("the objects")
 let dog = {
    dogName : "JS",
    weight : 23,
    color: "brown",
    age : 40
 }
let dogColor2 = dog.color; 
dog["color"] = "blue"; 
dog.weight = 2.3; 
console.log(dog); 

// Arrays in objects
 company = { companyName: "Healthy Candy", 
                activities: ["food manufacturing",  
"improving kids' health", "manufacturing toys"], 
                address: { 
                  street: "2nd street", 
                  number: "123", 
                  zipcode: "33116", 
                  city: "Miami", 
                  state: "Florida" 
                }, 
                yearOfEstablishment: 2021  
              }; 

 let addresses = [{ 
    street: "2nd street", 
    number: "123", 
    zipcode: "33116", 
    city: "Miami", 
    state: "Florida" 
  }, 
  { 
    street: "1st West avenue", 
    number: "5", 
    zipcode: "75001", 
    city: "Addison", 
    state: "Texas" 
  }];

