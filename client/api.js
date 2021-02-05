import request from 'superagent'

const weatherUrl = 'https://www.metaweather.com/api/location/'
const weatherAKL = 'https://www.metaweather.com/api/location/2348079,'

const bitCoin = 'https://api.coindesk.com/v1/bpi/currentprice/NZD.json'

const kayneQuote = 'https://api.kanye.rest/'

const dogImage = 'https://random.dog/woof.json'

const catImage = 'https://aws.random.cat/meow'

export function bitCoinTicker () {
  return request
    .get(bitCoin)
    .then(result => {
      const newResult = JSON.parse(result.text)
      return newResult
    })
}

export function showKanyeQuote () {
  return request
    .get(kayneQuote)
    .then(result => {
      return result.body
    })
}

export function showDogImage () {
  return request
    .get(dogImage)
    .then(result => {
      return result.body
    })
}

// hard coded for Auckland
export function displayWeather () {
  return request
    .get(weatherAKL)
    .then(result => {
      return result.body
    })
}

export function showCatImage () {
  return request
    .get(catImage)
    .then(result => {
      return result.body
    })
}
