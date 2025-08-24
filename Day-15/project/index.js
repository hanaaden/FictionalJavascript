let tasks = []

const taskTitle = document.getElementById("taskTitle")
const addTasks = document.getElementById("addTask")
const taskList = document.getElementById("taskList")

 let idCounter = 1;
   const addTask = ()=>{
        let input =  taskTitle.value.trim()
        
             if (!input) return;

            taskTitle.value = ""
            
        

    let arr = {

        id : "id: " + idCounter++,
        title : "Task: " + input,
        completed : "completion: " + "Not Done"
    }
    
    let container = document.createElement("div")
    let ids = document.createElement("p")
    let titleTask = document.createElement("p")
    let completion = document.createElement("p")
    let button = document.createElement("button")
    let butt = document.createElement("button")
    button.classList.add("btn")
    button.textContent = "Delete"
    butt.textContent = "Completed"
    butt.classList.add("btn1")
    
    button.addEventListener("click" ,()=>{
    tasks = tasks.filter(t => t.id !== arr.id); 
    container.remove()

})
butt.addEventListener("click" , ()=>{
    arr.completed = "completed: " + "Done"
    completion.textContent = arr.completed
    butt.remove()
    
})


    
    container.appendChild(titleTask)
    container.appendChild(ids)
    container.appendChild(completion)
    container.appendChild(button)
    container.appendChild(butt)
    taskList.appendChild(container)
    
    ids.textContent = arr.id
    titleTask.textContent = arr.title
    completion.textContent = arr.completed
          tasks.push(arr)

        }
      
    



addTasks.addEventListener("click" , addTask)
    



