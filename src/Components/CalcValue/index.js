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


// const lastCommand = calculation[calculation.length - 1]

// calculation = calculation.replace(/×/gi, '*').replace(/÷/gi, '/')

// if (lastCommand === '.' || calcOperators.indexOf(lastCommand) > -1) {
//   calculation = calculation.replace(/.$/, '')
// }

// if (calculation) {
//   this.setState({
//     currentValue: eval(calculation)
//   })