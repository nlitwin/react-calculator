import React from 'react'
import CalcValue from './index.js'
import { mount } from 'enzyme'

it('renders a | if there is no current value displayed', () => {
  const currentValue = ''

  const wrapper = mount(<CalcValue calcValue={currentValue} />)
  const node = wrapper.find('.calc-value')

  expect(node.text()).toBe('|')
})

it ('trims values to 10 places', () => {
  const currentValue = '0.8888888888888888'

  const wrapper = mount(<CalcValue calcValue={currentValue} />)
  const node = wrapper.find('.calc-value')

  expect(node.text()).toHaveLength(10)
})
