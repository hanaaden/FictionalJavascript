const myButton = document.createElement("button")
myButton.textContent = " click"
myButton.style.backgroundColor = "black"
myButton.style.color = "white"
myButton.style.fontSize = "40px"
document.body.appendChild(myButton)





myButton.addEventListener("click" , ()=>{
        document.body.style.backgroundColor = "green"

   
})