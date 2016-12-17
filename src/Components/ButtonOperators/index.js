import React from 'react'

require('./ButtonOperators.scss')

const ButtonOperators = ({ clickHandler }) => {
  return (
    <div className="operators" >
      <button className="operator">&#247;</button>
      <button className="operator">&#215;</button>
      <button className="operator">-</button>
      <button className="operator">+</button>
      <button className="operator">5</button>
    </div>
  )
}

export default ButtonOperators
