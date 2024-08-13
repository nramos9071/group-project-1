
const currentForecast = document.querySelector('#current-forecast');
let createEl = document.createElement('h2');
let sunnyContainer = document.querySelector('.sunny-container')
let rainyContainer = document.querySelector('.rainy-container')
let cloudyContainer = document.querySelector('.cloudy-container')
let winterContainer = document.querySelector('.winter-container')
const baseBackground = document.querySelector('.base-background')
const baseHeader = document.querySelector('.base-header')
const playlistHeader = document.querySelector('.playlist-header')




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

        // Get modal elements
var modal = document.getElementById("preferencesModal");
var btn = document.getElementById("notFeelingThisBtn");
var span = document.getElementsByClassName("close")[0];
var cancelBtn = document.getElementById("cancelBtn");

// Open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on 'X' click
// span.onclick = function() {
//     modal.style.display = "none";
// }

// Close modal on cancel button click
cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Enable the text input if 'Other' is selected
document.querySelectorAll('input[name="reason"]').forEach(function(elem) {
    elem.addEventListener('change', function() {
        if (this.value === "Other") {
            document.querySelector('input[name="otherReason"]').disabled = false;
        } else {
            document.querySelector('input[name="otherReason"]').disabled = true;
        }
    });
});

// form submission
document.getElementById("preferencesForm").onsubmit = function(event) {
    event.preventDefault();
    // You can add your logic to handle the form data here
    alert("Preferences updated!");
    modal.style.display = "none";
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
                playlistHeader.setAttribute('style', 'display:flex')
                console.log('working');
                            
            };

            createContent();

            

            if (weather[0].description ===  'clear sky' || weather[0].description === 'few clouds') {

                sunnyContainer.setAttribute('style', 'display:flex');
                rainyContainer.setAttribute('style', 'display:none');
                cloudyContainer.setAttribute('style', 'display:none');
                winterContainer.setAttribute('style', 'display:none');
                baseBackground.setAttribute('class', 'sunny-background');
                baseHeader.setAttribute('class', 'sunny-header');
             

                
            } 
            
            // if  (weather[0].description === 'shower rain' || weather[0].description === 'rain' || weather[0].description === 'thunderstorm' || weather[0].description === 'mist') {
            if   (weather[0].main === 'Rain' || weather[0].main === 'Thunderstorm' || weather[0].main === 'Drizzle') {

                rainyContainer.setAttribute('style', 'display:flex');
                cloudyContainer.setAttribute('style', 'display:none');
                winterContainer.setAttribute('style', 'display:none');
                sunnyContainer.setAttribute('style', 'display:none');
                baseBackground.setAttribute('class', 'rainy-background');
                baseHeader.setAttribute('class', 'rainy-header');
            }

            if  (weather[0].description === 'broken clouds' || weather[0].description === 'scattered clouds' || weather[0].description === 'overcast clouds') {

                rainyContainer.setAttribute('style', 'display:none');
                cloudyContainer.setAttribute('style', 'display:flex');
                winterContainer.setAttribute('style', 'display:none');
                sunnyContainer.setAttribute('style', 'display:none');
                baseBackground.setAttribute('class', 'cloudy-background');
                baseHeader.setAttribute('class', 'cloudy-header');
            }
            if  (weather[0].main === 'Snow') {

                rainyContainer.setAttribute('style', 'display:none');
                cloudyContainer.setAttribute('style', 'display:none');
                winterContainer.setAttribute('style', 'display:flex');
                sunnyContainer.setAttribute('style', 'display:none');
            }
            
        }

        

        

// const apiKey = '7a0fbe2742fb17dd43551428d82f00d1';
// const city = 'London'; // Specify the city for which you want to fetch weather data

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Display the weather data in the console
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

