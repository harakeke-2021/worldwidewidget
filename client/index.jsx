import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'

if (module.hot) {
  module.hot.accept()
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
