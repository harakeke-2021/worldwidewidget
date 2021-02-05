import React from 'react'
import WidgetsPage from './WidgetsPage'

function Demo () {
  const widget = [
    { name: 'Kanye' },
    { name: 'Weather' },
    { name: 'Dog' },
    { name: 'Bit Coin' },
    { name: 'Calender' }
  ]

  return (
    widget.map(widget => {
      return (
        <div key={widget.name}>
          <WidgetsPage data={widget.name} />
        </div>
      )
    })
  )
}

export default Demo
