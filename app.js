const temprature=document.querySelector('#temp');
const place=document.querySelector('#city');
const humidity=document.querySelector('#humidity');
const windspeed=document.querySelector('#windspeed');
const search=document.querySelector('#search');
const searchbtn=document.querySelector('#searchbtn')
const weathericon=document.querySelector('#weathericon');
const weathersection=document.querySelector('#weathersection');
const error=document.querySelector('#error');


const apiKey="daa36d826b4d0b87adb53bb06245a812";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
     if (response.status==404) {
        console.log("WRONG CITY");
        error.style.display="flex"
        weathersection.style.display="none";
    }
    else{
        var data=await response.json();
        error.style.display="none"
   
    console.log(data);

    place.innerHTML=data.name;
    temprature.innerHTML=Math.round(data.main.temp)+"°c";
    windspeed.innerHTML=data.wind.speed+"km/h"
    humidity.innerHTML=data.main.humidity+"%"

    if(data.weather[0].main=="Clouds"){
        weathericon.src="assets/clouds.png"
        console.log("clouds");
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="assets/clear.png"
        console.log("clear");
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="assets/rain.png"
        console.log("rain");
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="assets/rain.png"
        console.log("drixle");
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="assets/Mist.png"
        console.log("mist");
    }
        
    }
    
}

searchbtn.addEventListener('click',()=>{
    
    checkWeather(search.value);
    weathersection.style.display="flex"
    
})
