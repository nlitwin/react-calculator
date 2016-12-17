import React from 'react'
import CalculatorDisplay from './index.js'
import { mount } from 'enzyme'

it('renders a | if there is no current value displayed', () => {
  const currentValue = ''

  const wrapper = mount(<CalculatorDisplay displayValue={currentValue} />)
  const node = wrapper.find('.display-value')

  expect(node.text()).toBe('|')
})

it ('trims values to 10 places', () => {
  const currentValue = '0.8888888888888888'

  const wrapper = mount(<CalculatorDisplay displayValue={currentValue} />)
  const node = wrapper.find('.display-value')

  expect(node.text()).toHaveLength(10)
})
