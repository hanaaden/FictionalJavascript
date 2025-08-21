const getPost = document.getElementById("getPost")
const showPost = document.getElementById("show")
const display = document.getElementById("display")
const input = document.getElementById("input")



delay =(ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("")
        }, ms);
    })
}

const fetchPosts = async ()=>{
    display.innerHTML = ""
    let p = document.createElement("p")
    p.textContent = "loading........."
    display.appendChild(p)
   try {
    for (let index = 1; index < 6; index++) {
      await delay(2000)
      p.textContent = ""
     const url = `https://jsonplaceholder.typicode.com/posts/${index}`
    const result = await fetch(url)
    const res = await result.json()
    const userr = res.userId
     const userUrl = await fetch(`https://jsonplaceholder.typicode.com/users/${userr}`)
    const user = await userUrl.json()
    
    let container = document.createElement("div")
    container.classList.add("post-container");
    let title = document.createElement("h3")
    let body = document.createElement("p")
    let h2 = document.createElement('h2')

    title.textContent = res.title
    body.textContent = res.body
    h2.textContent = user.name

    container.appendChild(title)
    container.appendChild(h2)
    container.appendChild(body)
    display.appendChild(container)
   }
   
   } catch (error) {
    console.log("❌ Post not found",error.message)
   }
  

}


const fetchPostById = async (id) => {
     let p = document.createElement("p")
    p.textContent = "loading........."
    display.appendChild(p)

    
    
   try {
    if(isNaN(id)){
        alert("enter a number not letter")
        p.innerHTML = ""
        throw new Error("error happened");
        
    }
    await delay(2000)
      p.textContent = ""
     const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const resp = await fetch(url)
    const res = await resp.json()

    const userUrl = await fetch(`https://jsonplaceholder.typicode.com/users/${res.userId}`)
    const user = await userUrl.json()
    
    let container = document.createElement("div")
    container.classList.add("post-container");
    let title = document.createElement('h3')
    let body = document.createElement("p")
    let h2 = document.createElement('h2')

    title.textContent = res.title
    body.textContent = res.body
    h2.textContent = user.name
    
    container.appendChild(title)
    container.appendChild(h2)
    container.appendChild(body)
    display.appendChild(container)
   } catch (error) {
    console.log("Please enter a valid ID" , error.message)
   }
}

const fetcher = async()=>{
    try {
        let ids = input.value
    await fetchPostById(ids)
    } catch (error) {
        alert("enter a valid")
    }
}

showPost.addEventListener("click" , fetchPosts)
getPost.addEventListener("click", fetcher)