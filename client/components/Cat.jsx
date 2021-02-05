import React, { useState, useEffect } from 'react'
import { showCatImage } from '../api'

import widgetStyle from '../styles/widgetStyle.module.css'

function Cat () {
  const [cat, setCat] = useState({
    cat: ''
  })

  useEffect(() => {
    showCatImage()
      .then((result) => {
        setCat(result)
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div className={widgetStyle.card}>
      <img className={widgetStyle.img} src={cat.file} />
    </div>
  )
}

export default Cat
