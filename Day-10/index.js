const btn = document.getElementById("btn")
const input = document.getElementById("input")
const output = document.getElementById("output")

btn.addEventListener("click" , ()=>{
        
        if(input.value == ""){
                alert("enter a task")

        }else{
                let container = document.createElement("div")
        container.classList.add("container")
        let p = document.createElement("p")
        p.classList.add("p")
        let button = document.createElement("button")
        button.innerHTML = "remove"
        button.classList.add("delete");
        p.textContent = input.value 
        container.appendChild(p)
        container.appendChild(button)
        output.appendChild(container)
        input.value = ""

        button.addEventListener("click", ()=>{
                container.removeChild(p)
                container.removeChild(button)
        }) 
        }
})

