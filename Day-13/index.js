const number = [1, 2, 3, 4];

number.forEach((num, index) => {
  console.log(`index ${index} , value ${num}`);
});

const tasks = ["learn js", "Build project", "Read Book", "Go exercise"];

tasks.forEach((num, index) => {
  console.log(`${index}  ${num}`);
});

const arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();
arr.shift();
console.log(arr);

let names = ["Ali","Musa","Hodan"];
console.log(names[0]);
console.log(names[names.length-1]);
console.log(names[1]);

// for loop

let nums = [10,20,30]
for (let index = 0; index < nums.length; index++) {
    console.log(nums[index] ** 2);
}

// for of

for (let num of nums){
  console.log(num);
}

// for each 

nums.forEach((num, index )=> {
  console.log(index, num)
});

// for in
for (let index in nums) {
    console.log(index, nums[index]);
}

let student = {
    name: "Ali",
    age: 15,
    grade: "9th"
};
console.log(student["name"]);

console.log(student.name)

for (key in student){
  console.log(key ,":" , student[key]);
  
}


// task
let num= [2,4,6];

for (let nums of num){
  console.log(nums ** 2)
}

for (let i = 0; i< num.length ; i++){
  console.log(num[i] ** 2)
}

num.forEach((nums)=>{
  console.log(nums ** 2)
})

for(let index in num){
  console.log(num[index] ** 2)
}

// map
let r = [1,2,4,56]

let square = r.map((num)=>{
    return num ** 2
})

console.log(r)
console.log(square)

let numbers = [5,10,15];

let double = numbers.map((num)=>{
  return num * 2
})
console.log(numbers);
console.log(double);
// filter
let filter = numbers.filter((num)=> num > 10)
console.log(filter);

let numbe = [5,12,18,7,3,25];
let filters = numbe.filter((num)=>num > 10)
console.log(filters);

let numss= [5,10,15];

// sum all numbers
let total = numss.reduce((acc, curr) =>{
  console.log("acc:", acc, "curr:", curr);
  return acc + curr;
} , 1);

console.log(total); // 30


let numbrs = [5,12,18,7,3,25];
let reducer = numbrs.reduce((acc , curr)=>{
   return acc + curr
},0)
console.log(reducer)

let some = numbrs.some((n)=> n > 20)
let every = numbrs.every((n)=> n > 20)
let find = numbrs.find((n)=> n > 20)
let findIndex = numbrs.findIndex((n)=> n > 20)
console.log(some);
console.log(every);
console.log(find);
console.log(findIndex);


let nu = [5,12,18,7,3,25];
let somes = nu.some((n)=> n > 20 )
let everys = nu.every((n)=> n > 0)
let finds = nu.find((n)=> n % 5 == 0)
let findI = nu.findIndex((n)=> n < 10)

console.log(somes);
console.log(everys);
console.log(finds);
console.log(findI);


let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]

let nums1 = [1, 2, 3, 4, 5];
let [first1, ...rest] = nums1;
console.log(first1); // 1
console.log(rest);  // [2, 3, 4, 5]

let nums2 = [10, 20, 30, 40];
let [first, , third] = nums2; 
console.log(first, third); // 10 30


let fruits = ["apple", "banana", "orange" ,"mango"];
let another = ["grape", "melon"]
let c = [...fruits]
let c1 = [...fruits , ...another]
let [firsts , second] = c1
let [firstss , seconds , ...rests] = c1

console.log(fruits)
console.log(another)
console.log(c)
console.log(c1)
console.log(firsts,second)
console.log(firstss , seconds)
console.log(...rests)

console.log(fruits.sort())

let re =  [12,34,45,7,87]
console.log(re.reverse())

let nested = [1, [2,3], [4,5,[6]]];
console.log(nested.flat());       // [1,2,3,4,5,[6]]  → only 1 level
console.log(nested.flat(2));     // [1,2,3,4,5,6]    → 2 levels deep
