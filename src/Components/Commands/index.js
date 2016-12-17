import React from 'react'

require('./Commands.css')

const Commands = ({ clickHandler }) => {
  return (
    <div className="commands" >
      <div className="empty" />

      <button className="delete-command">delete</button>
    </div>
  )
}

export default Commands
