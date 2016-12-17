import React from 'react'

require('./Commands.css')

const Commands = ({ commandClick }) => {
  return (
    <div className="commands" >
      <div className="empty" />

      <button onClick={commandClick} className="delete-command">delete</button>
    </div>
  )
}

export default Commands
