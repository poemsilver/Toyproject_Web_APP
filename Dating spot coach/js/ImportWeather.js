const apiKey = "api_key";
const location = "Seoul,kr";

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const weather = data.weather[0].main.toLowerCase();
    console.log(weather);
  })
  .catch(error => console.error(error));
