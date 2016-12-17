import React, { Component } from 'react';
import CalculatorDisplay from './Components/CalculatorDisplay'
import Commands from './Components/Commands'
import ButtonValues from './Components/ButtonValues'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentValue: '',
      equation: '',
      lastOperator: '',
      lastNumber: ''
    }

    this.calculateValue = this.calculateValue.bind(this)
  }

  render() {
    return (
      <div className="app">
        <CalculatorDisplay displayValue={this.state.currentValue}/>

        <Commands commandClick={this.calculateValue}/>

        <ButtonValues buttonClick={this.calculateValue}/>
      </div>
    );
  }

  // TODO: simplify number of variables and create wrapper function for this.setState calls
  calculateValue(event) {
    const { currentValue, equation, lastOperator, lastNumber } = this.state
    const buttonValue = event.target.innerHTML
    const calcOperators = ['÷','×','-','+']
    let calculation = equation
    const lastValue = currentValue[currentValue.length - 1]
    const isLastAnOperator = calcOperators.indexOf(
      calculation[calculation.length - 1]) > -1

    if (buttonValue === 'delete') {
      // Hitting delete twice resets everything
      if (currentValue === '' && calculation.length) {
        this.setState({
          equation: '',
          lastOperator: '',
          lastNumber: ''
        })
      } else if(calculation.length && lastNumber.length) {
        this.setState({
          currentValue: '',
          equation: calculation.slice(0, lastNumber.length * -1),
          lastNumber: ''
        })
      } else {
        this.setState({
          currentValue: ''
        })
      }
    } else if (buttonValue === '=') { // Evaluate our equation

      // [2 + 8 =] -> [ 2 + 8 + 8 =]
      if (calculation[calculation.length - 1] === '=') {
        calculation = calculation.slice(0, -1) + lastOperator + lastNumber

        this.setState({
          currentValue: this.evaluateExpression(calculation),
          equation: calculation + '='
        })

      } else if (isLastAnOperator) {
        calculation = calculation.slice(0, -1) 

        this.setState({
          currentValue: this.evaluateExpression(calculation)
        })
      } else {
        // [2 + 3] -> = [2 + 3 =]
        this.setState({
          currentValue: this.evaluateExpression(calculation),
          equation: calculation + '='
        })
      }

    } else if (calcOperators.indexOf(buttonValue) !== -1) { // Is an operator
      // [2 +] -> /  [2 /]
      if (isLastAnOperator) {
        this.setState({
          equation: calculation.slice(0, -1) + buttonValue,
          lastOperator: buttonValue
        })
      } else {
      // [2 + 3] -> * [2 + 3 *]
        this.setState({
          equation: calculation + buttonValue,
          lastOperator: buttonValue
        })
      }
    } else { // Button pressed is a number
        // []
        if (equation === '') {
          this.setState({
            currentValue: buttonValue,
            equation: buttonValue,
            lastNumber: buttonValue
          })
        } else if (isLastAnOperator) {
          // [2 + ] -> 2 = [2 + 2]
          this.setState({
            currentValue: buttonValue,
            equation: calculation + buttonValue,
            lastNumber: buttonValue
          })
        } else {
          // [2 + 2] -> 4 = [2 + 24]
          this.setState({
            currentValue: currentValue + buttonValue,
            equation: calculation + buttonValue,
            lastNumber: lastNumber + buttonValue
          })
        }
    }
  }

  // TODO: Move to helper function outside of App.js
  evaluateExpression(equation) {
    equation = equation.replace(/×/gi, '*').replace(/÷/gi, '/')

    if (equation[equation.length-1] !== '=') {
      equation = equation.replace(/=/gi, '')
    }
    return eval(equation)
  }
}

export default App;
