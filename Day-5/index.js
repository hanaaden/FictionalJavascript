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
addP.style.fontSize = "100px"

// text node 
const textNOde = document.createTextNode("This is the perfect code ");
const div = document.getElementById("example2");
div.appendChild(textNOde)

// docment.write
document.write("<h1>Hello, World!</h1>");
