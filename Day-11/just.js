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
            const result = await deley(ms)
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


const fetchSequential = async()=>{
    try{
        for (let i = 1; i<5 ; i++){
            const post = `https://jsonplaceholder.typicode.com/posts/${i}`
            const res = await fetch(post)
        const Data = await res.json()
        console.log(Data)
        }

        const resUser = await fetch(user)
        const userData = await resUser.json()
        setTimeout(()=>{console.log(userData)} , 5000 )
    }catch(error){
    console.error("error Happened hana",error.message)
  }
}

// fetchSequential()

const delayer= ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task completed after 2 second")

            
        }, 2000);
    })
}

const caller = async ()=>{
try {
        const result = await delayer()
    console.log(result)
} catch (error) {
    console.error("error happened " , error.message)
}
}

// caller()

let i = 0
const delley = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`step ${i} done`)
        }, 2000);
        i++
    })

}

const stepper = async () => {
    try{
        if(i<3){
            for (let index = 0; index < 3; index++) {
        const res = await delley()
        console.log(res)
       
    }
    
        }else{
            throw new Error("the steps are more than 3");
        }
    }catch(error){
        console.error("error is happening" , error.message)
    }
    
}

// stepper()

const conditioneer = (n)=>{
    return new Promise((resolve, reject) => {
        if (n%2==0){
            setTimeout(() => {
                resolve(`even number: ${n}`)
            }, 1000);
        }else{
            setTimeout(() => {
             reject(new Error(`odd number ${n}`));
             }, 1000);
        }
    })
}

// const checker = async () => {
//     try {
//         const res = await conditioneer(6)
//     console.log(res)
//     } catch (error) {
//         console.error("error happened hana: " , error.message)
//     }
// }
// checker()

const uls = "https://jsonplaceholder.typicode.com/posts/1"
const uls1 = "https://jsonplaceholder.typicode.com/posts/2"
const uls2 = "https://jsonplaceholder.typicode.com/posts/3"
const getPosts = async (url) => {
    const result = await fetch(url)
    return  result.json()
   
}



const run = async () => {
    try {
        const result = await Promise.all([
            getPosts(uls),
            getPosts(uls1),
            getPosts(uls2)
        ])
        console.log(result)
    }catch(Error){
        console.error("there is error : " , error.message)
    }
}
// run()
 


const gettpost = async () => {
    try {
       for (let index = 1; index < 4; index++) {
          const urls =    `https://jsonplaceholder.typicode.com/posts/${index}`
          const result =  await fetch(urls)
          const res = await result.json()
          console.log(res)
         
       }
       
    } catch (error) {
        console.error("there is error happened:" , error.message)
    }
     
}
// gettpost()

const getter = async (urlr) => {
    const result = await fetch(urlr)
    return result.json()
}


   const runner = async () => {
    const ger = await Promise.all([
          getter(uls),
          getter(uls1),
          getter(uls2)
    ])
    console.log(ger)
  
}
    
// runner()



const runn = async () => {
   try {
    let arr = []
     for (let index = 1; index < 6; index++) {
       const ulss = `https://jsonplaceholder.typicode.com/posts/${index}`
       const rel = await fetch(ulss)
       const res = await rel.json()
       arr.push(res)
      
    }
     console.log(arr)
   } catch (error) {
      console.log("there is error Hana: " , error.message)
   }
   
}
// runn()
const delayt = () => new Promise(resolve => setTimeout(resolve, 2000));

const runne = async () => {
   try {
    
     for (let index = 1; index < 4; index++) {
       const ulss = `https://jsonplaceholder.typicode.com/posts/${index}`
       const rel = await fetch(ulss)
       const res = await rel.json()
        await delayt();
        console.log(res)
       
      
    }
    
     
   } catch (error) {
      console.log("there is error Hana: " , error.message)
   }
   
}
// runne()



const fetcher = async () => {
    for (let index = 1; index < 6; index++){
        const urler = `https://jsonplaceholder.typicode.com/posts/${index}`
       const result = await fetch(urler)
    const res = await result.json()
    const userId = res.userId

    const userIdd = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const userr = await userIdd.json()
    console.log(res)
    
    console.log(userr)
    }
   
}
// fetcher()

const fu = async (un) => {
          const post = `https://jsonplaceholder.typicode.com/posts/${un}`
            const res = await fetch(post)
        const Data = await res.json()
        const user = Data.userId
        const userrr = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        const userte = await userrr.json()
        return {Data , userte}
}


const runnerr = async () => {
    const result =  await Promise.all([
        fu(1),
        fu(2),
        fu(3),
        
    ])
    console.log(result)
}
runnerr()


