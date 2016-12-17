import React from 'react'

class CalcInput extends React.Component {
  //Future feature: let user type numbers on keyboard and use enter/backspace
  constructor(props) {
    super(props)

    this.state = {
      text: '0'
    }
  }

  render() {
    return (
      <input className="calc-input" value={this.state.text}/>
    )
  }
}

export default CalcInput
