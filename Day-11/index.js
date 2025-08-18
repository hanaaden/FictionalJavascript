

// fetchData = ()=>{
//     return new Promise(resolve => { 
//     setTimeout(() => resolve("Data recieved"), 1000)    
//     })
// }


// const getData = async ()=>{
//    try{
//      const result = await fetchData();
//     console.log(result)
//    }catch(error){
//     console.log("there is error");
//    }
// }
// // getData()

const delay = (ms) => new Promise(resolve=> setTimeout(()=>resolve("we are done waiting") ,ms))


const waitFetch = async ()=>{
    const res = await delay(2000)
    console.log(res)
}
waitFetch()

