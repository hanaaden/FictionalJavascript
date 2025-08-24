const user = {
    name : "ALe",
    age : 90 ,
    country : "Somalia"
}

const {name : namer , age , country , hoby = "coding"} = user
console.log(namer);
console.log(age);
console.log(country);
console.log(hoby);

console.log(user);


const person = {
  name: "Sara",
  address: {
    city: "hargeisa",
    zip: 252
  }
};

const {address : {city , zip}}= person

console.log(city);
console.log(zip);

const red = {redder : "red"}
function great({redder}) {
    console.log("the color is " , redder)
}
great(red)

const obj = {a : 1 , b : 2}
console.log(Object.keys(obj));
console.log(Object.values(obj)); 
console.log(Object.entries(obj)); 

