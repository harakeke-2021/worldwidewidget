import React from 'react'
import widgetPage from '../styles/widget.module.css'
import utilStyles from '../styles/utils.module.css'

import Kanye from './Kanye'
import Dog from './Dog'
import Cat from './Cat'
import kanyeQuote from '../styles/kanye.module.css'

function WidgetsPage () {
  return (
    <div className={utilStyles.container}>
      <h2>WORLD WIDE WIDGET</h2>
      <div className={widgetPage.grid}>
        <Kanye />
        <Dog />
        <Kanye />
        <Kanye />
        <Cat />
        <Kanye />
        {/* <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item>
      <item className={kanyeQuote.widget}><Kanye className={kanyeQuote.quote}/></item> */}
      </div>
    </div>
  )
}

export default WidgetsPage
