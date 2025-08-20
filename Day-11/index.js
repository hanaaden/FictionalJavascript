const deley = (ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`done after ${ms} ms`)
        }, ms);
    })
}

const testDelay = async () => {
    const result = await deley(2000)
    console.log(result)
}

// testDelay()

const checkDelay = async (ms)=>{
    try{
        if(ms < 0){
            throw new Error("error happened");
        }else{
            const result = await deley(ms)
            console.log(result)
        }
    }catch(error){
        console.error(error.message)
    }
}

// checkDelay(-90)
// checkDelay(1000)

// Task 3: Fetch a Post

const getter = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    const result = await fetch(url)
    const res = await result.json()
    console.log(res)
}

const getPost = async () => {
    console.log("loading.............");
    setTimeout(() => {
        getter()
    }, 2000);
}

// getPost()



    const fetcher = async () => {
        try {
            for (let index = 1; index < 5; index++) {
            const urls = `https://jsonplaceholder.typicode.com/posts/${index}`
            const result = await fetch(urls)
            const res = await result.json()
            console.log(res)
            
            
            
            }
        const userId = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        const userres = await userId.json()
            const delay = await deley(5000)
            console.log(delay)
            console.log(userres)
        } catch (error) {
            console.error("error happened Hana: " , error.message)
        }
    }
    // fetcher()

    const delayer = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("task completed after 2 second")
            }, 2000);
        })
    }


    const caller = async () => {
        try {
            const result = await delayer()
            console.log(result)
        } catch (error) {
            console.error("error happened" , error.message)
        }
    }

    // caller()

const deleys = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("")
        }, 2000);
    })
}

const counter = async (n) => {
    try {
        for (let index = n; index > 0 ; index--) {
           console.log(index)
           await deleys()
        }
        console.log("done")
    } catch (error) {
        console.log("erroooor")
    }
}

counter(5)
