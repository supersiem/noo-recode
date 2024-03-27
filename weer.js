export class Widget_tool {
    constructor(url, id) {
      this.url = url;
      this.id = id;
    }
    getBody() {
        return document.getElementById("body");
    }
    getTopbar() {
        return document.getElementsByClassName("topbar_holder");
    }
    getWidget() {
        return document.getElementById(this.url);
    }
    getText() {
        return document.getElementById(this.url).querySelector("p");
    }
    getIcon() {
        return document.getElementById(this.url).querySelector("i");
    }
    emptyIcon() {
        const Ielement = document.getElementById(this.url).querySelector("i");
        Ielement.classList.remove("fa-thumbs-down");
        Ielement.classList.remove("fa-solid");
        return Ielement
    }
    addIcon(icon){
        const Ielement = document.getElementById(this.url).querySelector("i");
        icon.split(" ").forEach((iconA) => {
            Ielement.classList.add(iconA);
        });
    }
    dataRead(){
        return JSON.parse(localStorage.getItem("main"));
    }
    dataWrite(data){
        localStorage.setItem("main",JSON.stringify(data));
        return true
    }
  }
const widget = new Widget_tool("weer.js", 'weer-widget');
// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'ea731e78fa72699b004ceea19f0067b1';
const city = 'Groningen'; // Change this to the desired city
// Teletubby code mode activated
const names = [
    "clear sky",
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "overcast clouds",
    "rain",
    "drizzle",
    "thunderstorm",
    "snow",
    "mist",
    "fog",
    "hail",
    "tornado"
  ];
  
  const nederlands = [
    "Heldere lucht",
    "Weinig wolken",
    "Verspreide bewolking",
    "Gebroken Wolken",
    "Bewolkte wolken",
    "Regen",
    "Motregen",
    "Onweersbui",
    "Sneeuw",
    "De nevel",
    "Mist",
    "Hagel",
    "Tornado"
  ];
  
  const icons = [
    "fa-solid fa-sun", // Clear Sky
    "fa-solid fa-cloud-sun", // Few Clouds
    "fa-solid fa-cloud", // Scattered Clouds
    "fa-solid fa-cloud", // Broken Clouds
    "fa-solid fa-cloud", // Overcast Clouds
    "fa-solid fa-cloud-showers-heavy", // Rain
    "fa-solid fa-cloud-rain", // Drizzle
    "fa-solid fa-bolt", // Thunderstorm
    "fa-solid fa-snowflake", // Snow
    "fa-solid fa-cloud", // Mist
    "fa-solid fa-smog", // Fog
    "fa-solid fa-cloud-showers-heavy", // Hail
    "fa-solid fa-wind", // Tornado
  ];
  


// Fetch weather data

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.weather[0].description;
        //const temperature = (data.main.temp - 273.15).toFixed(1); // Convert from Kelvin to Celsius
        console.log(weatherDescription)
        // Display weather information
        const selectedWeather = weatherDescription;

    // Find the index of "Few Clouds" in the names array
    const index = names.indexOf(selectedWeather);

    // Check if the selected weather is found in the names array
      // Retrieve the corresponding description and icon using the index
    const weer = nederlands[index];
    const icon = icons[index];
    widget.getText().textContent = weer;
    widget.emptyIcon();
    widget.addIcon(icon); })
    .catch(error => {
         console.error('Error fetching weather data:', error);
         widget.getText().textContent = "Error"
    });
    

