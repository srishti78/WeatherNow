const apiKey = "b406f6fd775d11bcc3b929db00f90ed8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");   // When people will click on the search button, It should send the city information in this check weather function
const weatherIcon = document.querySelector(".weather-icon");
// `` is known as backtick

// Fucntion for updating the text.
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        var data = await response.json();  // this data will have all the information related to this city bangalore.

// console.log(data); // using console.log to display data on the webpage

// document.querySelector(".city") will select the city element and innerHTML will update the text written in this element,and then we will add the data.name to update the city name. 
document.querySelector(".city").innerHTML = data.name;

// document.querySelector(".temp") will select the temeperature element of that particular city and innerHTML will update the text written in this element,and then we will add the data.temp to update the temperature of that city on the web app.
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

// document.querySelector(".city") will select the humidity element and innerHTML will update the text written in this element,and then we will add the data.main.humidity to update the humidity of that city on the web app.
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


// So Now we will Update the image according to the weather condition.

if(data.weather[0].main == "Clouds"){
weatherIcon.src = "images/clouds.png";
}

else if(data.weather[0].main == "Clear"){
weatherIcon.src = "images/clear.png";
}

else if(data.weather[0].main == "Rain"){
weatherIcon.src = "images/rain.png";
}

else if(data.weather[0].main == "Drizzle"){
weatherIcon.src = "images/drizzle.png";
}

else if(data.weather[0].main == "Humidity"){
weatherIcon.src = "images/humidity.png";
}

else if(data.weather[0].main == "Mist"){
weatherIcon.src = "images/mist.png";
}

else if(data.weather[0].main == "Snow"){
weatherIcon.src = "images/snow.png";
}

else if(data.weather[0].main == "Wind"){
weatherIcon.src = "images/wind.png";
}



document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

}

}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})