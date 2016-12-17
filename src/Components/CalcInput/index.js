import React from 'react'

require('./CalcInput.css')


class CalcInput extends React.Component {
  //Future feature: let user type numbers on keyboard and use enter/backspace
  constructor(props) {
    super(props)

    this.state = {
      text: 0
    }
  }

  render() {
    return (
      <div className="calc-input">
        <input value={this.state.text} />
      </div>
    )
  }
}

export default CalcInput
