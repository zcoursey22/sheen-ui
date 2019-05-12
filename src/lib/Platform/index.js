import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Platform = ({ children }) => (
  <ThemeProvider theme={theme}>
    <DefaultPlatform>{children}</DefaultPlatform>
  </ThemeProvider>
)

const DefaultPlatform = styled.div`
  padding: 1rem;
  background: ${props => props.theme.white};
  border-radius: 0.3rem;
  box-shadow: var(--box-shadow);
  display: inline-block;
`

Platform.propTypes = {
  children: PropTypes.node,
}

export default Platform
