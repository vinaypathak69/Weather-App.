const apiKey = "1f838c25896a24e90636290459eeaab6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");





async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";

    }else {

        var data = await response.json();
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h"; 



    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png"

    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png"
    }


    document.querySelector(".Weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


    }
    
    
 } 

   SearchBtn.addEventListener("click", ()=>{

    checkWeather(SearchBox.value);


   })

   

   



   

