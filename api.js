var city = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var button = document.querySelector(".search");
var cityname = document.querySelector(".cityname");
var celsius = document.querySelector(".celsius");
var fahren = document.querySelector(".fahren");
var d = new Date();
var n = d.toLocaleTimeString();
var testing;

button.addEventListener("click", function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityname.value +
      "&appid=4fa11cd50631e05ce049eac155b59eb7"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      city.innerHTML = "City Name: " + nameValue;
      temp.innerHTML = "Temperature: " + "<br><br>" + tempValue + " K";
      desc.innerHTML = "Description: " + descValue + "<br> on <br>" + d + n;
      celsius.innerHTML = Math.round(tempValue - 273.15) + " °C";
      fahren.innerHTML =
        Math.round((tempValue - 273.15) * (9 / 5) + 32) + " °F";
    })

    .catch((err) => alert("Unknown City Name"));
});
