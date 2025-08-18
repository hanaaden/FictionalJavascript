delay = ms =>{
     return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("this is my delay");
        
    }, ms);
    })
}



const check = async (ms) => {
    try{
        if (ms < 0) {
            throw new Error("error happened");
        }else{
            const result = await delay(ms)
    console.log(result)
        }
    }catch(error){
        console.error("recheck", error.message);
        
    }
}
// check(3000)



const getPost = async ()=>{
  try{
    const URL = "https://jsonplaceholder.typicode.com/posts/1"
    const res = await fetch(URL)
  const Data = await res.json()
  const great = ()=>{
    console.log(Data)
  }
  console.log("loading............")
  setTimeout(great, 2000)
  }catch(error){
    console.error("error Happened hana",error.message)
  }

  
}
// getPost()

const user = "https://jsonplaceholder.typicode.com/users/1"
const post = "https://jsonplaceholder.typicode.com/posts/1"

const fetchSequential = async()=>{
    try{
        const res = await fetch(post)
        const Data = await res.json()
        console.log(Data)

        const resUser = await fetch(user)
        const userData = await resUser.json()
        setTimeout(()=>{console.log(userData)} , 2000 )
    }catch(error){
    console.error("error Happened hana",error.message)
  }
}

fetchSequential()