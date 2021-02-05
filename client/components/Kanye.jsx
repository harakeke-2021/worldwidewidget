import React, { useState, useEffect } from 'react'
import { showKanyeQuote } from '../api'

import widgetStyle from '../styles/widget.module.css'

import kanyeImg from "url:../kanye.png?width=70&quality=60"

function Kanye () {
  const [quote, setQuote] = useState({
    quote: ''
  })

  const [canary, setCanary] = useState(true)

  useEffect(() => {
    showKanyeQuote()
      .then((result) => {
        setQuote(result)
        return null
      })
      .catch(err => console.error(err.message))
  }, [canary])

  return (
    <div className={widgetStyle.card}>
      <img src={kanyeImg} alt=""/>
      <h1>kanye says</h1>
      <p>{quote.quote}</p>
      <button onClick={() => setCanary(c => !c)}>give me more kanye</button>
    </div>
  )
}

export default Kanye
