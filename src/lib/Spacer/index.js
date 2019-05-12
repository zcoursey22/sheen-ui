import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Spacer = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styled>{children}</Styled>
  </ThemeProvider>
)

const Styled = styled.div`
  padding: 1rem;
  background: ${props => props.theme.white};
  border-radius: 0.3rem;
  box-shadow: var(--box-shadow);
  display: inline-block;
`

Spacer.propTypes = {
  children: PropTypes.node,
}

export default Spacer
