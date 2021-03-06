import React, { useState, useEffect } from 'react'
import { showDogImage } from '../api'

import widgetStyle from '../styles/widgetStyle.module.css'

function Dog () {
  const [dog, setDog] = useState({
    dog: ''
  })

  useEffect(() => {
    showDogImage()
      .then((result) => {
        setDog(result)
        return null
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <div className={widgetStyle.card}>
      <img className={widgetStyle.img} src={dog.url} />
    </div>
  )
}

export default Dog
