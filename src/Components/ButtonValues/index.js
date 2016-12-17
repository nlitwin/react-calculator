import React from 'react'

require('./ButtonValues.css')

const ButtonValues = ({ clickHandler }) => {
  return (
    <div className="button-values" >
      <button className="value">7</button>
      <button className="value">8</button>
      <button className="value">9</button>
      <button className="operator">÷</button>

      <button className="value">4</button>
      <button className="value">5</button>
      <button className="value">6</button>
      <button className="operator">×</button>

      <button className="value">1</button>
      <button className="value">2</button>
      <button className="value">3</button>
      <button className="operator">-</button>

      <button className="value">.</button>
      <button className="value">0</button>
      <button className="operator">=</button>
      <button className="operator">+</button>

    </div>
  )
}

export default ButtonValues
