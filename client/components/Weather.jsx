import React, { useState, useEffect } from 'react'
import request from 'superagent'
import widgetStyle from '../styles/widget.module.css'

const serverURL = 'http://localhost:3000/api/v1/'

function Weather () {
  const [weather, setWeather] = useState({
    city: '',
    temp: 0,
    feels: 0,
    icon: ''
  })

  useEffect(() => {
    request.get(serverURL)
      .then((result) => {
        console.log(result.body)
        const { name, main, weather } = result.body

        return setWeather({
          city: name,
          temp: main.temp,
          feels: main.feels_like,
          icon: weather[0].icon
        })
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div className={widgetStyle.card}>
      <h1>Weather for {weather.city}</h1>
      <p>Current Temp: {weather.temp}</p>
      <p>Feels like {weather.feels}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt=""/>

    </div>
  )
}

export default Weather
