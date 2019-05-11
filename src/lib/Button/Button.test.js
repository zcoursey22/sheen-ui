import React from 'react'
import { render } from 'react-testing-library'
import Button from './'

describe('Button', () => {
  const { getByTestId } = render(<Button onClick={() => {}}>Click Me</Button>)
  test('renders with text', () => {
    expect(getByTestId('button').textContent).toBe('CLICK ME')
  })
})
