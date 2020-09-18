"use strict";
(function(){
    $(document).ready(function(){
        // console.log("Good!");

        mapboxgl.accessToken = mapboxToken;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9', //specific stylesheet for map
            zoom: 9, //starting map zoom level
            center: [-96.80, 32.78] // starting position [lng, lat]
        });

        function searchLocation (location){
            geocode(location, mapboxToken)
                .then(function (result) {
                    getCurrentWeather(result[0], result[1]);
                    getForecastWeather(result[0], result[1]);
                    return result;
                }).then(function (data) {
                map.flyTo({
                    center: data,
                    zoom: 9});

                var marker = new mapboxgl.Marker({
                    draggable: true,
                })
                    .setLngLat(data)
                    .addTo(map);

                function dragMarker() {
                    var dragLocation = marker.getLngLat();
                    getCurrentWeather(dragLocation.lng, dragLocation.lat);
                    getForecastWeather(dragLocation.lng, dragLocation.lat);
                    map.flyTo({
                        center: [dragLocation.lng, dragLocation.lat],
                        zoom: 11,
                    })
                }

                marker.on('dragend', dragMarker)

            });
        }

        searchLocation("Lancaster, TX");

        let currentURL = "http://api.openweathermap.org/data/2.5/weather";
        let forecastURL = "http://api.openweathermap.org/data/2.5/forecast";

        //Current Weather Generator
        function getCurrentWeather (lng, lat) {
            $.get(currentURL, {
                "APPID": OPEN_WEATHER_APPID,
                "lon": lng,
                "lat": lat,
                "units": "imperial"
            }).done(function (data) {

                console.log('current weather data: ', data);

                let city = data.name;
                let today = (new Date()).toDateString().substring(0,10);
                // let date = (new Date(data.dt_txt.substring(0,10))).toDateString().substring(0,10);

                let temp = Math.floor(data.main.temp);
                let feelsLike = Math.floor(data.main.feels_like);
                let minTemp = Math.floor(data.main.temp_min);
                let maxTemp = Math.floor(data.main.temp_max);
                let humidity = data.main.humidity;
                let wind = Math.floor(data.wind.speed);
                // let mainWeather = data.weather[0].main;
                let description = data.weather[0].description;
                let icon = data.weather[0].icon;
                let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                let currentHTML = "";

                $('#city-name').empty();
                $('#city-name').html(`<i class="fas fa-location-arrow"> Curious Weather of ... ${city}`);

                $('#current-weather').empty();
                currentHTML += `<div class="card text-dark my-3">` +
                    `<img class="card-img" id="weather-icon" src="${iconURL}" alt="Card image"/>` +
                    `<div class="card-img-overlay">` +
                    `<h4 class='card-text'>${today}</h4>` +
                    `<h1 class='card-title d-inline-block text-sizing-header'>${temp}°F</h1>` +
                    `<h6 class='text-muted'>Feels like: ${feelsLike}°F</h6>` +
                    `<h3 class='card-title'>${description}</h3>`+
                    `<h6 class='card-text'>Humidity: ${humidity}%</h6>` +
                    `<h6 class='card-text'>Wind Speed: ${wind}mph</h6>` +
                    `<p class='card-text'>`+
                    `<span>High: ${maxTemp}°F </span>` +
                    `<span>Low: ${minTemp}°F </span>`+
                    `</p>`+
                    `</div>` +
                    `</div>`;

                $('#current-weather').append(currentHTML);
            });
        };

        // //Forecast Weather Generator
        function getForecastWeather (lng, lat) {
            $.get(forecastURL, {
                "APPID": OPEN_WEATHER_APPID,
                "lon": lng,
                "lat": lat,
                "units": "imperial"
            }).done(function(data){
                console.log("forecast weather data",data);
                $('#forecast-weather').empty();

                for (let i = 0; i < data.list.length; i+=8) {
                    let city = data.list[i].name;
                    let date = (new Date(data.list[i].dt_txt.substring(0,10))).toDateString().substring(0,10);
                    let temp = Math.floor(data.list[i].main.temp);
                    let feelsLike = Math.floor(data.list[i].main.feels_like);
                    // let minTemp = Math.floor(data.list[i].main.temp_min);
                    // let maxTemp = Math.floor(data.list[i].main.temp_max);
                    let humidity = data.list[i].main.humidity;
                    let wind = Math.floor(data.list[i].wind.speed);
                    // let mainWeather = data.list[i].weather[0].main;
                    let description = data.list[i].weather[0].description;
                    let icon = data.list[i].weather[0].icon;
                    let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    let forecastHTML = "";

                    forecastHTML += `<div class="card col-3 my-3 text-dark text-center">` +
                        `<img class="card-img" src="${iconURL}" alt="Card image"/>` +
                        `<div class="card-img-overlay">` +
                        `<h4 class='card-text text-underline'>${date}</h4>` +
                        `<h1 class='card-title'>${temp}°F</h1>` +
                        `<h3 class='card-title'>${description}</h3>`+
                        `<h6 class='card-text'>Humidity: ${humidity}%</h6>` +
                        `<h6 class='card-text'>Wind Speed: ${wind}mph</h6>` +
                        `</div>` +
                        `</div>`;

                    $('#forecast-weather').append(forecastHTML);
                    $('#forecast-weather').children().first().css('display', 'none');
                }

            });
        };

        // Search City Form Click Submit button
        $("#citySubmit").click(function (e) {
            e.preventDefault();
            let location = $("#cityInput").val().trim();
            if (location !== "") {
                searchLocation(location);
                $("#cityInput").val("");
            }
        });

        // Search City form press the Enter key
        $("#cityInput").on("keypress", function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                let location = $("#cityInput").val().trim();
                if (location !== "") {
                    searchLocation(location);
                    $("#cityInput").val("");
                }
            }
        });

    });
})();