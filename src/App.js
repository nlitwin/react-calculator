import React, { Component } from 'react';
import CalcInput from './Components/CalcInput'
import Commands from './Components/Commands'
import ButtonValues from './Components/ButtonValues'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastOperator: '',
      lastValue: 0
    }
  }


  render() {
    return (
      <div className="app">
        <CalcInput />

        <Commands />

        <ButtonValues />
      </div>
    );
  }
}

export default App;
