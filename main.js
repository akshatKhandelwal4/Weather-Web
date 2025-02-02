const apiKey = "41915020b42650c3c2d6a5d8fa1522bd";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(c){
    const response = await fetch(apiUrl+c+`&appid=${apiKey}`);
    const data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{   

    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/haze.png"
    }
    
    document.querySelector(".weather").style.display = "block";

    }
    console.log(data)

    
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
