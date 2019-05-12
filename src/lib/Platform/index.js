import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Platform = ({ children, elevation }) => (
  <ThemeProvider theme={theme}>
    <Styled elevation={elevation}>{children}</Styled>
  </ThemeProvider>
)

const Styled = styled.div`
  padding: 1rem;
  background: ${props => props.theme.white};
  border-radius: 0.3rem;
  box-shadow: ${props => props.theme.boxShadow[props.elevation]};
  display: inline-block;
`

Platform.defaultProps = {
  elevation: 1,
}

Platform.propTypes = {
  children: PropTypes.node.isRequired,
  elevation: PropTypes.number,
}

export default Platform
