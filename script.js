let weather = {
  apiKey: "9c4faf716efed4577c8b69314d3524d2",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
  },
  displayWeather: function (data) {},
};
