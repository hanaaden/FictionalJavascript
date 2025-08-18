// const getUser = ()=>{
//     return new Promise((resolve) => {
//         setTimeout(()=> resolve ("user Data loaded"),1000)
//     })
    
// }

// const getPost = ()=>{
//     return new Promise((_ , reject)=>{
//         setTimeout(()=> reject(new Error("failed the post load")),1000)
//     })
// }
// const getComment = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("comment loaded") , 1000)
//     })
// }

// const loadData = async ()=>{
//     try{
//         const user = await getUser()
//         console.log(user);  
//         const posts = await getPost()
//         console.log(user);  
//         const comment = await getComment()
//         console.log(comment);  
//         console.log("Dashboard loaded")
//     }catch(err){
//         console.log("catch error" , err.message)
//     }
// }

// loadData()

const getData = async () =>{
    try {
   const result = await new Promise((resolve, reject) => {
 
       setTimeout(() =>{
    resolve ("Data received")
   } , 1000)
   })
   console.log(result);
   
 } catch (error) {
    console.log("error happened:" , error);
    
 }
   }

getData()