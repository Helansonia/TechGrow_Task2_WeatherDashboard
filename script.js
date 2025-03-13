const apiKey = "033c1a4cf21948a8919173250250903"; 

async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    let data = await response.json();

    if (response.status !== 200 || data.error) {
        alert("City not found. Try again.");
        return;
    }

    document.getElementById("cityName").innerText = data.location.name + ", " + data.location.country;
    document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById("description").innerText = `Condition: ${data.current.condition.text}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
    document.getElementById("windSpeed").innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
}
