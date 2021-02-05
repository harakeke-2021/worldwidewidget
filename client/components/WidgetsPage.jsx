import React from 'react'
import widgetPage from '../styles/widget.module.css'
import utilStyles from '../styles/utils.module.css'

import Kanye from './Kanye'
import Bitcoin from './Bitcoin'
import Weather from './Weather'
import Dog from './Dog'

const widgetLookup = new Map()
widgetLookup.set('kanye', Kanye)
widgetLookup.set('bitcoin', Bitcoin)
// widgetLookup.set('weather', Weather)
// widgetLookup.set('dog', Dog)

function WidgetsPage (props) {
  const { widgets } = props

  console.log(widgets)
  return (
    <div className={utilStyles.container}>
      <h1>look at all these widgets</h1>
      <div className={widgetPage.grid}>
        {widgets.map(({ name }) => {
          const Component = widgetLookup.get(name)
          if (Component && typeof Component === 'function') {
            console.log(name)
            return <Component key={name} />
          }
        })}
      </div>
    </div>
  )
}

export default WidgetsPage
