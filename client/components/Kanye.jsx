import React, { useState, useEffect } from 'react'
import { showKanyeQuote } from '../api'
import kanyeQuote from '../styles/kanye.module.css'

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

    <p className={kanyeQuote.quote}>{quote.quote}</p>

  )
}

export default Kanye
