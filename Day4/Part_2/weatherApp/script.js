const API_KEY = `6bd1237e19dfdb9c1dbd03bb94d97171`;
const weatherInfoContainer = document.querySelector(`.weather-info-container`);
const searchField = document.querySelector(`.search-box input`);
const searchButton = document.querySelector(`.search-box button`);
const cityName = document.querySelector(`.city-name`);
const iconImage = document.querySelector(`.icon img`);
const temperatureField = document.querySelector(`.temperature .value`);
const humidityField = document.querySelector(`.humidity .value`);
const pressureField = document.querySelector(`.pressure .value`);

searchButton.addEventListener("click", () => {
  if (searchField.value.trim()) getWeatherInfo(searchField.value);
  else alert("Please enter city name");
});

const getWeatherInfo = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    if (response.ok) {
      weatherInfoContainer.style.display = "block";
      cityName.innerText = data.name;
      iconImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      temperatureField.innerText = data.main.temp;
      humidityField.innerText = data.main.humidity;
      pressureField.innerText = data.main.pressure;
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error.message);
  }
};
