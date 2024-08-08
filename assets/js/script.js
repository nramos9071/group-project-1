
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
            weatherDiv.innerHTML = `
                <h2>Weather in ${name}</h2>
                <p>${weather[0].description}</p>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
            `;
        }
