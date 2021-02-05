// Sample response body - deconstruct what you need
// {"time":{"updated":"Feb 4, 2021 19:21:00 UTC","updatedISO":"2021-02-04T19:21:00+00:00","updateduk":"Feb 4, 2021 at 19:21 GMT"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","bpi":{"USD":{"code":"USD","rate":"37,173.8773","description":"United States Dollar","rate_float":37173.8773},"NZD":{"code":"NZD","rate":"51,944.4713","description":"New Zealand Dollar","rate_float":51944.4713}}}

import React, { useState, useEffect } from 'react'
import { bitCoinTicker } from '../api'

import widgetStyle from '../styles/widget.module.css'

function Bitcoin () {
  const [value, setValue] = useState({
    time: '',
    nzd: '',
    usd: ''
  })

  useEffect(() => {
    bitCoinTicker()
      .then((result) => {
        console.log(result)
        setValue({
          time: result.time.updated,
          nzd: result.bpi.NZD.rate,
          usd: result.bpi.USD.rate
        })
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div className={widgetStyle.card}>
      <h1>Bitcoin Price</h1>
      <p>Date & Time: {value.time}</p>
      <p>NZD: ${value.nzd}</p>
      <p>USD: ${value.usd}</p>
    </div>
  )
}

export default Bitcoin
