import React, { useEffect, useState } from 'react'
import Quagga from 'quagga'
import Popup from './Popup'
import { db } from '../../../firebase/Firebase'
import { ref, onValue } from 'firebase/database'

function Scanner(props) {

  const [showPopup, setShowPopup] = useState(false)
  const [ticket, setTicket] = useState(null)
  const [barcode, setBarcode] = useState('')

  // Read Database
  const findTicket = (code) => {
    const dbJson = ref(db, '/');
    onValue(dbJson, (snapshot) => {
      const data = snapshot.val()
      const found = data.filter((d) => {
        if (d.Barcode === code) {
          return d
        }
      })
      return found[0]
    })
  }

  const _onDetected = result => {
    Quagga.stop()
    props.onDetected(result)
    const code = result.codeResult.code
    setBarcode(code)
    const ticket = findTicket(code)
    setTicket(ticket)
    setShowPopup(true)
  }

  // componentDidMount
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 500,
            height: 320,
            facingMode: 'environment',
          }
        },
        locator: {
          halfSample: true,
          patchSize: "large", // x-small, small, medium, large, x-large
          debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true
            }
          }
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['code_128_reader'],
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true
          },
        },
        locate: true,
      },
      function (err) {
        if (err) {
          return console.log(err)
        }
        // alert("Initialization finished. Ready to start");
        // console.log("Initialization finished. Ready to start");
        Quagga.start()
      },
    )
    Quagga.onDetected(_onDetected)
  }, [showPopup])

  // componentWillUnmount
  useEffect(() => {
    return () => {
      Quagga.offDetected(_onDetected)
    }
  }, [])

  return (
    <>
      <div id="interactive" className="viewport" />
      {showPopup && <Popup
        // className="modal"
        ticket={ticket}
        barcode={barcode}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        />
      }
    </>
  )

}

export default Scanner