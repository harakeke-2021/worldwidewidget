import React, { useState } from 'react'
import Home from './Home'
import utils from '../styles/utils.module.css'

import '../styles/global.css'

export default function App () {
  const [counter, setCounter] = useState(0)

  return (<>
    <h1>Hello team you are cool!</h1>
    <p className={utils.primary}>the number is {counter}</p>
    <button className={utils.red} onClick={() => setCounter((s) => s + 1)}>wow</button>
    <Home/>
  </>)
}
