const currentForecast = document.querySelector('#current-forecast');
let createEl = document.createElement('h2');
let sunnyContainer = document.querySelector('.sunny-container');
let rainyContainer = document.querySelector('.rainy-container');
let cloudyContainer = document.querySelector('.cloudy-container');
let winterContainer = document.querySelector('.winter-container');
let dustContainer = document.querySelector('.dust-container');
let hazeContainer = document.querySelector('.haze-container');
let foggyContainer = document.querySelector('.foggy-container')
let warningContainer = document.querySelector('.warning-container');
const baseBackground = document.querySelector('.base-background');
const baseHeader = document.querySelector('.base-header');
const playlistHeader = document.querySelector('.playlist-header');
const openingHeader = document.querySelector('.opening-container');


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

document.querySelector('.dropdown-menu').addEventListener('click', function(event) { 

    const weatherDescriptionDataAttribute = event.target.getAttribute('data-weather')
    const weather = [{description:weatherDescriptionDataAttribute}]

    displayPlaylist(weather);
  

} )

function displayPlaylist(weather) {
const description = weather[0].description
const main = weather[0].main

            
    if (description ===  'clear sky' || description === 'few clouds' || description === 'sunny') {
        
        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        sunnyContainer.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:none');
        baseBackground.setAttribute('class', 'sunny-background');
        baseHeader.setAttribute('class', 'sunny-header');
     

        
    } 
    
    if   (main === 'Rain' || main === 'Thunderstorm' || main === 'Drizzle' || description === 'rainy') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:flex');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:none');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:none');
        baseBackground.setAttribute('class', 'rainy-background');
        baseHeader.setAttribute('class', 'rainy-header');
    }

    if  (description === 'broken clouds' || description === 'scattered clouds' || description === 'overcast clouds' || description === 'cloudy') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:flex');
        winterContainer.setAttribute('style', 'display:none');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:none');
        baseBackground.setAttribute('class', 'cloudy-background');
        baseHeader.setAttribute('class', 'cloudy-header');
        
    }
    if  (main === 'Snow' || description === 'snowy') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:flex');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:none');
    }

    if  (description === 'smoke' || description === 'volcanic ash' || description === 'tornado' || description === 'warning') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:none');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:none');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:flex');
        baseBackground.setAttribute('class', 'cloudy-background');
        baseHeader.setAttribute('class', 'cloudy-header');
    }

    if  (description === 'dust') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:none');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:flex');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:none');
        baseBackground.setAttribute('class', 'cloudy-background');
        baseHeader.setAttribute('class', 'cloudy-header');
    }

    if  (description === 'haze') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:none');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:flex');
        foggyContainer.setAttribute('style', 'display:none');
        warningContainer.setAttribute('style', 'display:none');
        baseBackground.setAttribute('class', 'cloudy-background');
        baseHeader.setAttribute('class', 'cloudy-header');
    }

    if  (description === 'mist' || description === 'fog') {

        openingHeader.setAttribute( 'style', 'display:none');
        playlistHeader.setAttribute('style', 'display:flex');
        rainyContainer.setAttribute('style', 'display:none');
        cloudyContainer.setAttribute('style', 'display:none');
        winterContainer.setAttribute('style', 'display:none');
        sunnyContainer.setAttribute('style', 'display:none');
        dustContainer.setAttribute('style', 'display:none');
        hazeContainer.setAttribute('style', 'display:none');
        foggyContainer.setAttribute('style', 'display:flex');
        warningContainer.setAttribute('style', 'display:none');
        baseBackground.setAttribute('class', 'cloudy-background');
        baseHeader.setAttribute('class', 'cloudy-header');
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
                playlistHeader.setAttribute('style', 'display:flex')
                console.log('working');
                            
            };

            createContent();

            

         displayPlaylist(weather); 

        }
   
