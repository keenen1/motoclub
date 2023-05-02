import React, { Component } from 'react'
import Scanner from './Scanner'
import { Fab, TextareaAutosize, Paper } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link } from "react-router-dom";
import { useState } from 'react';

function BarScan() {

  const [state, setState] = useState({
    results: []
  })

  // const scan = () => {
  //   setState({ scanning: !this.state.scanning })
  // }

  const onDetected = result => {
    setState({ results: [] })
    setState({ results: state.results.concat([result]) })
  }


  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="secondary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>Barcode Scanner</span>

      <Paper variant="outlined" style={{ marginTop: 30, width: 640, height: 320 }}>
        <Scanner onDetected={onDetected} />
      </Paper>

      <TextareaAutosize
        style={{ fontSize: 32, width: 320, height: 100, marginTop: 30 }}
        rowsMax={4}
        defaultValue={'No data scanned'}
        value={state.results[0] ? state.results[0].codeResult.code : 'No data scanned'}
      />

    </div>
  )
}

export default BarScan