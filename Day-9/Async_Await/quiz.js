const delay = (ms)=>{
    return new Promise((resolve) => {
        setTimeout(resolve,ms)
    })
}

const sayHelloWithDelay = async ()=>{
    console.log("(wait a bit)")
    const rondom = Math.floor(Math.random() * (1500 - 500) + 500)
    const res = await delay(rondom)
    
    console.log("Hello!")
}

sayHelloWithDelay()

// task 2

const tryBrokenFetch = async() =>{
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/invalidurl")
    if(!res.ok){
        throw new Error ("Oops! Failed to fetch.")
    }
    }catch(error){
        console.log(error.message)
    }
}
tryBrokenFetch()
