import React from 'react'

function Weather () {
  return (
    <h1>Weather!🌦</h1>
  )
}

export default Weather

// ************
// comments
// ************

// API call will return a large object which will need to be deconstructed like the below:

//* **the whole API data for AKL***
// const {title} = req.body

//* **returns an array of objects and we only need the first one***
// const {consolidated_weather} = req.body

//* **Assign the current weather ONLY as it is the first item obj in the array***
// const weather = consolidated_weather[0]

// **********************************************************************
//* **The follow data is the avaliable to be displayed in the widget***
// **********************************************************************

//* **the current temp***
// weather.the_temp

// minimum weather for the day
// weather.min_temp

// maximum for the day
// weather.max_temp

// describes the weather 'heavy rain' etc
// weather.weather_state_name

// returns the abbrivation for the weatherIcon link
// weather.weather_state_abbr

// Can use this link and just change the {weather.weather_state_abbr} to get the correct icon
// const weatherIcon = 'https://www.metaweather.com/static/img/weather/{weather.weather_state_abbr}.svg'
