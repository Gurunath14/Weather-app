const apikey = "&appid=2aa2384d686072f2398976d89ca34f4c";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const button = document.querySelector(".search button");
const city = document.querySelector(".search input");
const errormsg = document.querySelector(".error");
const weatherimage = document.querySelector(".weathericon");
button.addEventListener("click", function () {
  checkweather(city.value);
});
city.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkweather(city.value);
  }
});

async function checkweather(city) {
  const response = await fetch(apiurl + city + apikey);
  //   const response = await fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=2aa2384d686072f2398976d89ca34f4c&units=metric"
  //   );
  var data = await response.json();
  console.log(data);
  if (data.cod === "404") {
    errormsg.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Mist") {
      weatherimage.src = "./images/mist.png";
    } else if (data.weather[0].main === "Clouds") {
      weatherimage.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherimage.src = "./images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherimage.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "Humidity") {
      weatherimage.src = "./images/humidity.png";
    } else if (data.weather[0].main === "Rain") {
      weatherimage.src = "./images/Rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherimage.src = "./images/snow.png";
    } else if (data.weather[0].main === "Wind") {
      weatherimage.src = "./images/wind.png";
    }
    errormsg.style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
