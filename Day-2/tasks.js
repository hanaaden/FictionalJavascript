let colors = ["red" , "green"]
colors.push("blue" , "yellow")
console.log(colors)
colors.shift()
console.log(colors)
colors.unshift("black" , "white")
console.log(colors)
colors.splice(2,1,"red")
console.log(colors)
colors.pop()
colors.pop()
console.log(colors)


let users = [
  { name: "Ali", age: 17 },
  { name: "Zara", age: 22 },
  { name: "Omar", age: 35 }
];

let find = users.find(namee => namee.age >18)
console.log(find)

let indexw = users.findIndex(namee => namee.name === "Zara")
console.log(indexw)

const element = document.getElementById("myDiv")

element.addEventListener("click" , ()=>{
    alert("clicked")
})