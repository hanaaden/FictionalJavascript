//  window listener 

window.onload = () =>{
    alert("page loaded")
}
window.onresize = () =>{
    console.log("page resized")
    let width = window.innerWidth
    let height = window.innerHeight
    console.log("the width: " , width)
    console.log("the height: " , height)
}

// mouse Events 
const myBox = document.getElementById('myBox');
const myButton = document.getElementById('btn')

myBox.addEventListener("click" , event=>{
     event.target.style.backgroundColor="tomato";
    event.target.textContent = "O OUCH 😖"
} );

myBox.addEventListener("mouseover" , event =>{
    event.target.style.backgroundColor="lightblue"
    event.target.textContent = "don't do it 😨"
})

myBox.addEventListener("mouseout" , event =>{
    event.target.style.backgroundColor="lightgreen";
    event.target.textContent = "click me 😊"
})
myButton.addEventListener("click" , event=>{
     myBox.style.backgroundColor="tomato";
    myBox.textContent = "O OUCH 😖"
} );

myButton.addEventListener("mouseover" , event =>{
    myBox.style.backgroundColor="lightblue"
    myBox.textContent = "don't do it 😨"
})

myButton.addEventListener("mouseout" , event =>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent = "click me "
})

//keyboard listerner

const ourBox= document.getElementById('ourBox');
const moveAmount =10
let x = 0;
let y = 0;

document.addEventListener("keydown" , (event) =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount
                break
            case "ArrowDown":
                y += moveAmount
                break
            case "ArrowLeft":
                x -= moveAmount
                break
            case "ArrowRight":
                x += moveAmount
                break
        }
        ourBox.style.top = `${y}px`;
        ourBox.style.left = `${x}px`;
    }
      
});



