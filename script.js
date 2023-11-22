const apiKey = 'b7e89c8fadmsh089468f5a08057dp1cc0d5jsn9b263261e397';
const host = 'weather-by-api-ninjas.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': host,
  },
};

var city = "Patna";
var rEsponse = "";

var cityName = document.getElementById('cityName');
const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const temp2 = document.getElementById('temp2');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const humidity2 = document.getElementById('humidity2');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_speed2 = document.getElementById('wind_speed2');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submit');



const updateWeatherData = (response) => {
  console.log(response);
  wrong.innerHTML =  rEsponse;
  cityName.innerHTML = city;
  cloud_pct.innerHTML = response.cloud_pct;
  temp.innerHTML = response.temp;
  temp2.innerHTML = response.temp;
  feels_like.innerHTML = response.feels_like;
  humidity.innerHTML = response.humidity;
  humidity2.innerHTML = response.humidity;
  min_temp.innerHTML = response.min_temp;
  max_temp.innerHTML = response.max_temp;
  wind_speed.innerHTML = response.wind_speed;
  wind_speed2.innerHTML = response.wind_speed;
  sunrise.innerHTML = response.sunrise;
  sunset.innerHTML = response.sunset;
};

const getWeather = (city) => {
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then((response) => {
      if (!response.ok) {
        // fix this 
        rEsponse = "Something Went Wrong";
        // throw new Error('Network response was not ok');
      }
      else{
        rEsponse = "";
      }
      return response.json();
    })
    .then((data) => {
      updateWeatherData(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  city = cityInput.value;
  getWeather(city);
  
});

getWeather('Patna')
