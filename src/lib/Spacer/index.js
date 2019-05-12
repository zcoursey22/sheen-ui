import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Spacer = ({ children, direction, space }) => {
  const directions = {
    col: Column,
    row: Row,
  }
  const Styled = directions[direction]
  return (
    <ThemeProvider theme={theme}>
      <Styled space={space} direction={direction}>
        {children}
      </Styled>
    </ThemeProvider>
  )
}

const Column = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin-top: ${props => props.space + 'em'};
    &:nth-child(1) {
      margin-top: 0;
    }
  }
`

const Row = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-left: ${props => props.space + 'em'};
    &:nth-child(1) {
      margin-left: 0;
    }
  }
`

Spacer.defaultProps = {
  direction: 'col',
  space: 1,
}

Spacer.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['col', 'row']),
  space: PropTypes.number,
}

export default Spacer
