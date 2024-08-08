const cloudy = document.getElementsByClassName('cloudy-playlist')

const apiKey = '7a0fbe2742fb17dd43551428d82f00d1';
const city = 'London'; // Specify the city for which you want to fetch weather data

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Display the weather data in the console
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
