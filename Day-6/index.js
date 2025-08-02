try{
    adalert("we are running");
    
}catch(err){
    document.getElementById("demo2").innerHTML = err.stack
    document.getElementById("demo1").innerHTML = err.message
}

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  } finally {
    document.getElementById("demo").value = "";
  }
}

let promp = Number(prompt("enter a number: "))

try{
    if(isNaN(promp)) {
        throw "Invalid number"
    }else{
        alert(`the number was ${promp}`)
    }
}catch(err){
        alert("the error is " + err)
    }

divide = (a,b)=>{
   try{
     if (b == 0){
        throw "can not divide 0"
    }else{
        alert( a / b)
    }
   }catch(err){
     alert(err)
   }
}
divide(9 , 0)