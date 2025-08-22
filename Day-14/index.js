const button = document.getElementById("btn")
const input = document.getElementById("cityInput")
const weatherDisplay = document.getElementById("weatherDisplay")



const fetcher = async()=>{
    weatherDisplay.textContent = ""
    try {
        let city = input.value.trim()
    if(city == ""){
         return alert("Please enter a city name.")
    }
    let result = city.toLowerCase()
    
        const url =  `https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=fb603c80f31d0fbb93cc5dca6af5aa09&units=metric`
        const resp = await fetch(url)
       const res = await resp.json()

       let cityname = document.createElement("h1")
       let temperature = document.createElement("p")
       let description= document.createElement("p")
       let icon = document.createElement("img")

       cityname.textContent = res.name
       temperature.textContent = res.main.temp + "°C"
      description.textContent = res.weather[0].description.charAt(0).toUpperCase() + res.weather[0].description.slice(1)


      icon.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`

       icon.alt = "weather checker"

       weatherDisplay.appendChild(cityname)
       weatherDisplay.appendChild(temperature)
       weatherDisplay.appendChild(description)
       weatherDisplay.appendChild(icon)

    } catch (error) {
        console.error("error happened" , error.message)
       weatherDisplay.textContent = "Error Happened invalid input"
    }
}

button.addEventListener("click" , fetcher)