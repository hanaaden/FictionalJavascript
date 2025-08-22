# Day-14
# 🌦️ Weather App

A simple **JavaScript Weather App** that fetches live weather data from the [OpenWeatherMap API](https://openweathermap.org/api).  
Users can enter a city name and see:

- 📍 City name  
- 🌡️ Temperature in °C  
- ☁️ Weather description  
- 🖼️ Weather icon  

---

## 📌 Features
- Search weather by city name  
- Shows temperature, description, and icon  
- Handles invalid inputs with error messages  
- Uses async/await for clean code  

---

## 🛠️ How It Works
1. **Input**: User enters a city name in the input field.  
2. **API Call**: The app fetches data from OpenWeatherMap.  
3. **Display**: Shows city name, temperature, weather description, and icon.  
4. **Error Handling**: Alerts if input is empty or shows a message if invalid.  

---

## 🚀 Usage
1. Get a free API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).  
2. Replace the API key in the code:  
   ```js
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=YOUR_API_KEY&units=metric`
