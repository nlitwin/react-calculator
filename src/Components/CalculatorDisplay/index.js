import React from 'react'

require('./CalculatorDisplay.css')

const CalculatorDisplay = ({ displayValue }) => {
  displayValue = displayValue.toString()

  return (
    <div className="display-value">
      {displayValue === '' ? '|' : displayValue.slice(0, 10)}
    </div>
  )
}

export default CalculatorDisplay
