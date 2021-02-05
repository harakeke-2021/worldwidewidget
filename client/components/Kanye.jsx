import React, { useState, useEffect } from 'react'
import { showKanyeQuote } from '../api'

import widgetStyle from '../styles/widget.module.css'

function Kanye () {
  const [quote, setQuote] = useState({
    quote: ''
  })

  useEffect(() => {
    showKanyeQuote()
      .then((result) => {
        setQuote(result)
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div className={widgetStyle.card}>
      <h1>kanye says</h1>
      <p>{quote.quote}</p>
    </div>
  )
}

export default Kanye
