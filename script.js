function fetchWeather() {
  var city = document.getElementById("city").value;
  var apiKey = "8ac688db61c6f5e6e946317d176fb5c2";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
}
function displayWeather(data) {
  const { name } = data;
  const { temp } = data.main;
  const { description } = data.weather[0];

  var des = String(description);
  console.log(name, description, temp);
  document.querySelector(".city").innerHTML = "Weather in " + name;
  document.querySelector(".temp").innerHTML = temp + "°F";
  document.querySelector(".description").innerHTML = description;
}
