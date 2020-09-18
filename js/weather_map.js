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

        searchLocation("Dallas, TX");

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

                let temp = data.main.temp;
                let feelsLike = data.main.feels_like;
                let minTemp = data.main.temp_min;
                let maxTemp = data.main.temp_max;
                let humidity = data.main.humidity;
                let wind = data.wind.speed;
                let mainWeather = data.weather[0].main;
                let description = data.weather[0].description;
                let icon = data.weather[0].icon;
                let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                let currentHTML = "";

                $('#city-name').empty();
                $('#city-name').html(`<i class="fas fa-location-arrow"> Curious Weather of ... ${city}`);

                $('#current-weather').empty();
                currentHTML += `<div class="card bg-dark text-white">` +
                    `<img class="card-img" id="weather-icon" src="" alt="Card image">` +
                    `<div class="card-img-overlay">` +
                    `<p class='card-text'>${today}</p>` +
                    `<h3 class='card-title'>${temp}°F<span class='badge text-muted'>Feels like: ${feelsLike}°F</span></h3>` +
                    `<h5 class='card-title'>${description}</h5>`+
                    `<p class='card-text'>Humidity: ${humidity}%</p>` +
                    `<p class='card-text'>Wind Speed: ${wind}mph</p>` +
                    `<p class='card-text'>Max/Min Temp: ${maxTemp}°F/${minTemp}°F</p>` +
                    `<p class='card-text'>${today}</p>` +
                    `</div>` +
                    `</div>`;

                $('#current-weather').append(currentHTML);
                $('#weather-icon').attr("src", iconURL);
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
                    let temp = data.list[i].main.temp;
                    let feelsLike = data.list[i].main.feels_like;
                    let minTemp = data.list[i].main.temp_min;
                    let maxTemp = data.list[i].main.temp_max;
                    let humidity = data.list[i].main.humidity;
                    let wind = data.list[i].wind.speed;
                    let mainWeather = data.list[i].weather[0].main;
                    let description = data.list[i].weather[0].description;
                    let icon = data.list[i].weather[0].icon;
                    let iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    let forecastHTML = "";

                    console.log(icon);
                    console.log(iconURL);


                    forecastHTML += `<div class="card w-25 bg-dark text-white">` +
                        `<img class="card-img" id="weather-icon" src="" alt="Card image">` +
                        `<div class="card-img-overlay">` +
                        `<p class='card-text'>${date}</p>` +
                        `<h3 class='card-title'>${temp}°F<span class='badge text-muted'>Feels like: ${feelsLike}°F</span></h3>` +
                        `<h5 class='card-title'>${description}</h5>`+
                        `<p class='card-text'>Humidity: ${humidity}%</p>` +
                        `<p class='card-text'>Wind Speed: ${wind}mph</p>` +
                        `<p class='card-text'>Max/Min Temp: ${maxTemp}°F/${minTemp}°F</p>` +
                        `<p class='card-text'>${date}</p>` +
                        `</div>` +
                        `</div>`;

                    $('#forecast-weather').append(forecastHTML);
                    $('#weather-icon').attr("src", iconURL);
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