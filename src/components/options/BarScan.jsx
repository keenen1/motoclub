import React, { useState, useEffect } from 'react'
import Scanner from './scanner/Scanner'
import { Fab, Paper } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link } from "react-router-dom"

function BarScan() {

  const [state, setState] = useState({
    results: []
  })

  const onDetected = result => {
    setState({ results: [] })
    setState({ results: state.results.concat([result]) })
  }


  return (
    <div className="camera-box" >
      <div className="back-button">
        <Link to="/">
          <Fab style={{ marginRight: 10 }} color="secondary">
            <ArrowBack />
          </Fab>
        </Link>
        <span className="back-title">Barcode Scanner</span>
      </div>


      <Paper variant="outlined" className="paper-container">
        <Scanner onDetected={onDetected} />
      </Paper>

      {/* <TextareaAutosize
        style={{ fontSize: 32, width: 320, height: 100, marginTop: 30 }}
        maxRows={4}
        value={state.results[0] ? state.results[0].codeResult.code : 'No data scanned'}
      /> */}

    </div>
  )
}

export default BarScan