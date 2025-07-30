let cars = [
    {
        "color" : "red",
        "type": "sedan",
        "capacity" : "7"
    },
    {
        "color" : "black",
        "type": "SUV",
        "capacity" : "5"
    },
    {
        "color" : "blue",
        "type": "hatchback",
        "capacity" : "5"
    },
    {
        "color" : "brawn",
        "type": "bus",
        "capacity" : "25"
    }
]
console.log(cars)

// for each
console.log("for each loop")
cars.forEach(carn =>{
    console.log(carn)
})
// accessing objects 
console.log("we accessed the array")
let car1 = cars[1];
console.log(car1)

// updating objects
console.log("we updated the array")
let car_update = [  {
        "color" : "pink",
        "type": "minibus",
        "capacity" : "15"
    }
]
cars[0] = car_update
console.log(cars)

// adding first position object
console.log("we added object the array")
carset2 = [
    {
        "color" : "purple",
        "type" : "SUV",
        "capacity" : "4"
    }
]
cars.unshift(carset2)
console.log(cars)

// adding last position
console.log("we added on last position")
carset3 = [
   {
        "color" : "red",
        "type": "sedan",
        "capacity" : "7"
    }
]
cars.push(carset3)
console.log(cars)
// we adding the middle 
console.log("we added on last position")
carset4 = [
   {
        "color" : "yellow",
        "type": "truck",
        "capacity" : "7"
    }
]
cars.splice( 3, 0 , carset4)
console.log(cars)

let sizes = cars.map(car =>{
    if (car.capacity <=3){
        return "small"
    }else if(car.capacity <= 5){
        return "medium"
    }else{
        return "large"
    }
})
console.log(sizes)