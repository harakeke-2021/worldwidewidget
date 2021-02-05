import React, { useState } from 'react'
import utils from '../styles/utils.module.css'

import { Route } from 'react-router-dom'

// import '../../node_modules/bulma/css/bulma.css'

import '../styles/global.css'
import WidgetsPage from './WidgetsPage'
import Kanye from './Kanye'

export default function App () {
  const [counter, setCounter] = useState(0)

  return (<>
    <Route path='/' component={WidgetsPage}/>

  </>)
}
