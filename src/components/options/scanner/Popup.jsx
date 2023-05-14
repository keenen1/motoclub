import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

function getModalStyle() {
  const top = 40
  const left = 100
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  }
}

function Popup(props) {

  const [modalStyle] = useState(getModalStyle)
  
  
  const {ticket, barcode} = props

  const handleClose = () => {
    props.setShowPopup(false)
  }

  return (
    <Modal aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={props.showPopup}
      onClose={handleClose}
      >
      <div className="popup">
        <p>
          Barcode <br></br><strong>{barcode}</strong><br></br> scanned!
        </p>
        {/* <div>
          <Button
            // id="bds-yes"
            variant='contained'
            type='submit'>
            Yes
          </Button>
          <Button
            // id="bds-no"
            variant='contained'
            onClick={handleClose}>
            No
          </Button>
        </div> */}
      </div>
    </Modal>
  )
}

export default Popup