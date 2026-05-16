let cityInput = document.getElementById("cityInput")
let button = document.getElementById("getWeatherBtn")
let cityName = document.getElementById("cityName")
let temperature = document.getElementById("temperature")
let description = document.getElementById("description")

const apiKey = "cd5df355284d787ef701724e66b48ac9"
const weatherIcon = document.getElementById("weatherIcon")



button.addEventListener("click", function () {

    let city = cityInput.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(function(response) {
        return response.json()
    })

    .then(function(data) {

        console.log(data)

        if (data.cod == "401") {
            alert("API key inválida ou ainda não ativou")
            return
        }

        if (data.cod == "404") {
            alert("Cidade não encontrada")
            return
        }

        cityName.textContent = data.name
      temperature.innerText = `${Math.round(data.main.temp)}°C`
       
description.innerText =
data.weather[0].description.charAt(0).toUpperCase() +
data.weather[0].description.slice(1)

const iconCode = data.weather[0].icon
weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`
    })

})