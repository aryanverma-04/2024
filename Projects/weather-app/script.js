let Key = "3f460fc590b00902bbcf9d54742dc634";
let query = "https://api.openweathermap.org/data/2.5/weather?";
let latitude = "lat=";
let longitude = "lon=";
let data;

function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position);
            }, error => {
                reject(error);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

async function checkWeather(inputValue) {
    try {
        if(inputValue){
            const q = query + "q="+inputValue+ `&appid=` + Key + `&units=metric`; // Added '=' before 'metric'
            const response = await fetch(q);
            data = await response.json();
            console.log(data);
            updateWeatherInfo();
        }
        else{
            const position = await getLocation();
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            const q = query + "lat=" + latitude + `&` + "lon=" + longitude + `&appid=` + Key + `&units=metric`; // Added '=' before 'metric'
            const response = await fetch(q);
            data = await response.json();
            console.log(data);
    
            updateWeatherInfo(); // Call the function to update weather information
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to update weather information on the page
function updateWeatherInfo() {
    document.querySelector(".weather-info-box").style.display = "block";
    const temperature = data.main.temp;
    let weatherText = document.getElementsByClassName("weather-text")[0];
    weatherText.innerHTML = data["weather"][0]["main"]+" <br> "+temperature;

    let humditiyInfo = document.getElementById("humidity-info")
    humditiyInfo.innerHTML = "Humidity <br> " + data.main.humidity + "% ";

    let windInfo = document.getElementById("wind-info")
    windInfo.innerHTML = "Wind Speed <br> " + data.wind.speed + " km/h ";
}

var input = document.querySelector(".search-bar input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var input = document.getElementById("myInput"); // Get the input element by its ID
        var inputValue = input.value;
        console.log(inputValue)
        checkWeather(inputValue);
    }
});

// Call checkWeather function once when the page loads
checkWeather();
