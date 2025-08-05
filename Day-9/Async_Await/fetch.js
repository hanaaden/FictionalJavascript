const delay =(ms)=>{
    return new Promise( resolve=>{setTimeout(resolve,ms)})
}

const fetchWithRetry = async (URL)=>{
    try{
        const res = await fetch(URL)
        if(!res.ok){
            throw new Error("something is wrong")
        }
        const data = await res.json()
        return data
    }catch(error){
        console.log("First try failed. Retrying in 2 seconds...");
        await delay(2000)
        try{
            const res = await fetch(URL)
            if(!res.ok){
                throw new Error("failed again")
            }
             const data = await res.json()
             return data
        }catch(secondError){
            console.log("Both attempts failed.");
      return null;
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
  .then(post => {
    if (post) console.log("Post title:", post.title);
    else console.log("Post could not be loaded.");
  });