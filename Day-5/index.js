// the Id is content in HTML file 
const element = document.getElementById("example");
// Modify the content
element.textContent = "Hello, JavaScript!";

// the document.querySelector()

const element1 = document.querySelector("#example1");
element1.innerHTML = "coding Day 5"

// the ad element 
const addP = document.createElement('p');

addP.textContent = "This is dynamically added in JS";

document.body.appendChild(addP);
addP.style.fontSize = "30px"

// text node 
const textNOde = document.createTextNode("This is the perfect code ");
const div = document.getElementById("example2");
div.appendChild(textNOde)


const btn = document.getElementById("btn")
btn.addEventListener("click" , ()=>{
    alert("me")
   let master = document.getElementsByClassName("master2");
   master[2].textContent = "I will drink orange"
})

const changer = document.getElementById("changer")
changer.addEventListener("click" , ()=>{
    let master = document.getElementsByTagName("p")
    master[5].textContent = "like they are"
})
// docment.write
document.write("<h1>Hello, World!</h1>");



