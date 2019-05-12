import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Container = ({ children, minWidth, maxWidth }) => (
  <ThemeProvider theme={theme}>
    <Styled minWidth={minWidth} maxWidth={maxWidth}>{children}</Styled>
  </ThemeProvider>
)

const Styled = styled.div`
  min-width: ${props => props.minWidth ? props.minWidth + "px": "auto"};
  max-width: ${props => props.maxWidth ? props.maxWidth + "px" : "auto"};
  margin: 0 auto;
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string
}

export default Container
