import React, { Component } from 'react';
import CalcInput from './Components/CalcInput'
import ButtonOperators from './Components/ButtonOperators'
import ButtonValues from './Components/ButtonValues'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastOperator: ''
      lastValue: 0
    }
  }


  render() {
    return (
      <div className="App">
        <CalcInput />

        <ButtonOperators />

        <ButtonValues />
      </div>
    );
  }
}

export default App;
