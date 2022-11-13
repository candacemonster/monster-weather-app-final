function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weatherDescription");
  let sunriseElement = document.querySelector("#sunrise");
  let sunsetElement = document.querySelector("#sunset");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  sunriseElement.innerHTML = response.data.sys.sunrise;
  sunsetElement.innerHTML = response.data.sys.sunset;
}

let apiKey = "898368c8b82c44ea298ea746725fa93a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
