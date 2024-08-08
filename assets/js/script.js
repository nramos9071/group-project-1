
const currentForecast = document.querySelector('#current-forecast');
let createEl = document.createElement('h2');
let sunnyContainer = document.querySelector('.sunny-container')
let rainyContainer = document.querySelector('.rainy-container')



        async function getWeather() {
            const city = document.getElementById('city').value;
            const apiKey = '7a0fbe2742fb17dd43551428d82f00d1'; // Replace with your OpenWeatherMap API key
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('City not found');
                }
                const data = await response.json();
                displayWeather(data);
                
            } catch (error) {
                document.getElementById('weather').innerText = error.message;
            }
        }

        function displayWeather(data) {
            const weatherDiv = document.getElementById('weather');
            const { main, name, weather } = data;
            console.log(data);
            weatherDiv.innerHTML = `
                <h2>Weather in ${name}</h2>
                <p>${weather[0].description}</p>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
            `;
            function createContent() {
    
    
    
                currentForecast.appendChild(createEl);
                createEl.textContent = `Today's weather in ${name} is ${weather[0].description}.`
                console.log('working');
                            
            };

            createContent();

            if (weather[0].description ===  'clear sky' ) {

                sunnyContainer.setAttribute('style', 'display:flex');

                
            } 
            
            // if  (weather[0].description === 'shower rain' || 'rain' || 'thunderstorm' || 'mist') {

            //     rainyContainer.setAttribute('style', 'display:flex');


            // }
            
        }

        

        

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

