import React from 'react'

import { Route } from 'react-router-dom'

import Demo from './Demo'

// import '../../node_modules/bulma/css/bulma.css'

import '../styles/global.css'

export default function App () {
  return (<>
    <Route path='/' component={Demo}/>
  </>)
}
