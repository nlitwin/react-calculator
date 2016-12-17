import React from 'react'

require('./CalcValue.css')

const CalcValue = ({ calcValue }) => {
  calcValue = calcValue.toString()

  return (
    <div className="calc-value">
      {calcValue === '' ? '|' : calcValue.slice(0, 10)}
    </div>
  )
}

export default CalcValue
