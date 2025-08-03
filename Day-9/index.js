//call stack

first = ()=>{
   
   second()
   console.log("first function")
}
second = () =>{
   
    third()
     console.log("secondfunction")
}

third = () =>{
    console.log("third function")
}
first()


