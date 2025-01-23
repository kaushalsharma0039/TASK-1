async function fetchWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "74e03e199a60d38ececda2b3afc5eefc"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind-speed").textContent = data.wind.speed;

        document.getElementById("weather-output").style.display = "block";
    } catch (error) {
        alert("Error fetching weather data. Please check the city name and try again.");
        console.error(error);
    }
}