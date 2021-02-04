import React, { useState } from 'react'
import Home from './Home'
import utils from '../styles/utils.module.css'

import { Route } from 'react-router-dom'

import '../styles/global.css'
import WidgetsPage from './WidgetsPage'
import Kanye from './Kanye'

export default function App () {
  const [counter, setCounter] = useState(0)

  return (<>
    <Route path='/' component={WidgetsPage}/>

  </>)
}
