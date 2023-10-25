const apiKey = "b2f95f7c450dcd045ea7fd4ce8685769";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let city = document.getElementById('search');
let searchBtn = document.getElementById('search-btn');
let weatherIcon = document.querySelector('#weather-icon');

async function checkWeather(city)
{
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.getElementById('Invalid').style.display = 'block';
        document.querySelector('.weather-update').style.display = 'none';
    } else {
        document.getElementById('Invalid').style.display = 'none';
        document.querySelector('.weather-update').style.display = 'block';

        let data = await response.json();
        document.querySelector('#city-name').innerHTML = city;
        document.querySelector('#city-temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('#wind').innerHTML = "Wind: " + data.wind.speed + "Km/ph";
        document.querySelector('#humidity').innerHTML = "Humidity: " + data.main.humidity + "%";

        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "/Weather App/images/clear.png"
        } else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "/Weather App/images/Clouds.png"
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "/Weather App/images/Rain.png"
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/Weather App/images/Drizzle.png"
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "/Weather App/images/Mist.png"
        } else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "/Weather App/images/Snow.png"
        }
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(city.value);
})