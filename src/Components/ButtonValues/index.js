import React from 'react'

require('./ButtonValues.css')

const ButtonValues = ({ buttonClick }) => {
  return (
    <div className="button-values" >
      <button className="value" onClick={buttonClick}>7</button>
      <button className="value" onClick={buttonClick}>8</button>
      <button className="value" onClick={buttonClick}>9</button>
      <button className="operator" onClick={buttonClick}>÷</button>

      <button className="value" onClick={buttonClick}>4</button>
      <button className="value" onClick={buttonClick}>5</button>
      <button className="value" onClick={buttonClick}>6</button>
      <button className="operator" onClick={buttonClick}>×</button>

      <button className="value" onClick={buttonClick}>1</button>
      <button className="value" onClick={buttonClick}>2</button>
      <button className="value" onClick={buttonClick}>3</button>
      <button className="operator" onClick={buttonClick}>-</button>

      <button className="value" onClick={buttonClick}>.</button>
      <button className="value" onClick={buttonClick}>0</button>
      <button className="operator" onClick={buttonClick}>=</button>
      <button className="operator" onClick={buttonClick}>+</button>
    </div>
  )
}

export default ButtonValues
