import React from 'react'
import widgetPage from '../styles/widgetspage.module.css'
import utilStyles from '../styles/utils.module.css'

import Kanye from './Kanye'
import kanyeQuote from '../styles/kanye.module.css'

function WidgetsPage () {
  return (
    <div className={utilStyles.container}>
      <h1>look at all these widgets</h1>
      <div className={widgetPage.grid}>
        <Kanye />
        <Kanye />
        <Kanye />
        <Kanye />
        <Kanye />
        <Kanye />
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
