import React, { useState, useEffect } from 'react'
import { showKanyeQuote } from '../api'

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
    <>
      <p>{quote.quote}</p>
    </>
  )
}

export default Kanye
