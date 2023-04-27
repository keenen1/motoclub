import React, { useState } from 'react'
import Scanner from './Scanner'

const Container = () => {
  
  const [state, setState] = useState({
    showScanner: false
  })

  const toggleScanner = () => {
    setState({
      showScanner: !state.showScanner
    })
  }

  const Prompt = () => (
    <div className="prompt" onClick={toggleScanner}>
      Ready to Scan!
    </div>
  )

  return (
    <div className="container">
      {state.showScanner
        ? <Scanner />
        : <Prompt />
      }
    </div>
  )
}

export default Container