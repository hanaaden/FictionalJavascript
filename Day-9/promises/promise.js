let p = new Promise((accept , reject) =>{
    let x = 10
    if (x == 9){
        accept("success")
    }else{
        reject("failed")
    }
})

p.then((message)=>{
    console.log("then messaged : " , message)
}).catch((message)=>{
    console.log("catches the error : " , message  )
})