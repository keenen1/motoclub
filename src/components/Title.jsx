import React from 'react'

const Title = (props) => {
  const {title, subtitle} = props

  return (
    <div className="title-container">
      <div className="title-contents">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  )
}

export default Title