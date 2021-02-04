import React from 'react'
import widgetPage from '../styles/widgetspage.module.css'

import Kanye from './Kanye'
import kanyeQuote from '../styles/kanye.module.css'

function WidgetsPage () {
  return (
    <div className={widgetPage.dashboard}>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
    </div>
  )
}

export default WidgetsPage
