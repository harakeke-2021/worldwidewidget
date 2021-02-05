import React from 'react'
import WidgetsPage from './WidgetsPage'

function Demo () {
  const widgets = [
    { name: 'kanye' },
    // { name: 'weather' },
    // { name: 'wog' },
    { name: 'bitcoin' },
    // { name: 'calender' }
  ]

  return (
    <WidgetsPage widgets={widgets} />
  //   widget.map(widget => {
  //     return (
  //       <div key={widget.name}>
  //         <WidgetsPage data={widget.name} />
  //       </div>
  //     )
  //   })
  )
}

export default Demo
