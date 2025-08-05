
const wait = ms =>{
    
 return new Promise(resolve  => {
    setTimeout(resolve,ms)
 })    
}

const showmessege = async ()=>{
   console.log("waiting 2 seconds.....")
   await wait(2000)
   console.log("done")
}

showmessege()

// Real Async Work – Fetching Data
const getUser = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await res.json()
    console.log(user.name)
}

getUser()

// handling error
const getUserSafe = async ()=>{
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1000")
  if (!res.ok) throw new Error("user not found");
    const user = res.json()
    console.log(user.name)
  }catch(error){
    console.error("error is " , error.message)
  }

}
// getUserSafe()


const userfet = async()=>{
   for(let i = 1; i<5 ; i++){
     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
      const user = await res.json()
      console.log(user.name)
      
   }
}
// userfet()




const delayer = async()=>{
    try{
        for(let i = 1 ; i<5 ; i++){
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${i } `)
        if(!res.ok) throw new Error ("something wrong")
    const post = await res.json()
    console.log(post.title)
    const rese = Math.floor(Math.random() * (2000 - 200) + 200 )
    console.log(`waiting ${rese} ms`)
    await wait(rese)
        }
    }catch(error){
        console.log("the error :" , error.message)
    }
}
delayer()


