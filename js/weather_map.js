"use strict";
(function(){
    $(document).ready(function(){
        // console.log("Good!");

        mapboxgl.accessToken = mapboxToken;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9', //specific stylesheet for map
            zoom: 13, //starting map zoom level
            center: [-96.80, 32.78] // starting position [lng, lat]
        });

        function searchLocation (location){};

        let currentURL = "http://api.openweathermap.org/data/2.5/weather";
        let forecastURL = "http://api.openweathermap.org/data/2.5/forecast";

        //Current Weather Generator
        function getCurrentWeather (lng, lat) {
            $.get(currentURL, {
                "APPID": OPEN_WEATHER_APPID,
                "lon": lng,
                "lat": lat,
                "units": "imperial"
            }).done(function(data){
                console.log("current weather data: ",data);
                $('#current-weather').empty();

            });
        };

        //Forecast Weather Generator
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
                    let date = data.list[i].dt_txt;
                    let temp = data.list[i].main.temp;
                    let feelsLike = data.list[i].main.feels_like;
                    let minTemp = data.list[i].main.temp_min;
                    let maxTemp = data.list[i].main.temp_max;
                    let humidity = data.list[i].main.humidity;
                    let wind = data.list[i].wind.speed;
                    let mainWeather = data.list[i].weather[0].main;
                    let description = data.list[i].weather[0].description;
                    let html = "";


                }

                $('#forecast-weather').append(html);
            });
        };

        // Search City Form Click Submit button
        $("#citySubmit").click(function (e) {
            e.preventDefault();
            let location = $("#cityInput").val().trim();
            if (location !== "") {
                searchFor(location);
                $("#cityInput").val("");
            }
        });

        // Search City form press the Enter key
        $("#cityInput").on("keypress", function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                let location = $("#cityInput").val().trim();
                if (location !== "") {
                    searchFor(location);
                    $("#cityInput").val("");
                }
            }
        });


        function getWeatherData (lng, lat){
            let url = "http://api.openweathermap.org/data/2.5/forecast";
            $.get(url, {
                "APPID": OPEN_WEATHER_APPID,
                "lon": lng,
                "lat": lat,
                "units": "imperial"
            }).done(function(data){
                $('#city-name').html("<i class=\"fas fa-location-arrow\"> Curious Weather of ... " + data.city.name);

                console.log(data.list);

                let html = "";

                let fiveDayForecast = [];
                for (let i = 0; i < data.list.length; i+=8) {
                    fiveDayForecast.push(data.list[i]);
                }

                console.log(fiveDayForecast);

                for (let i = 0; i < fiveDayForecast.length; i++){

                }

                function creatingCard (day) {

                }
            });
        };



        // Search City Form Click Submit button
        $("#citySubmit").click(function (e) {
            e.preventDefault();
            let location = $("#cityInput").val().trim();
            if (location !== "") {
                searchFor(location);
                $("#cityInput").val("");
            }
        });

        // Search City form press the Enter key
        $("#cityInput").on("keypress", function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                let location = $("#cityInput").val().trim();
                if (location !== "") {
                    searchFor(location);
                    $("#cityInput").val("");
                }
            }
        });

        function searchFor(searchStr) {

            geocode(searchStr, mapboxToken)
                .then(function (result) {
                    getWeatherData(result[0], result[1]);
                    return result;
                }).then(function (data) {
                map.flyTo({center: data, zoom: 12});

                let marker = new mapboxgl.Marker({
                    draggable: true})
                    .setLngLat(data)
                    .addTo(map);

                function onDragEnd() {
                    let lngLat = marker.getLngLat();

                    getWeatherData(lngLat.lng, lngLat.lat);
                    map.flyTo({center: [lngLat.lng, lngLat.lat], zoom: 12});
                }

                marker.on('dragend', onDragEnd);
            });
        };

        searchFor("Dallas, TX");
    });
})();