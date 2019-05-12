import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Text = ({ children, color, allCaps, fontWeight }) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled color={color} fontWeight={fontWeight}>
        {allCaps ? children.toUpperCase() : children}
      </Styled>
    </ThemeProvider>
  )
}

const Styled = styled.span`
  color: ${props =>
    props.color === 'default'
      ? props.theme.black
      : props.theme[props.color].main};
  font-weight: ${props => props.fontWeight};
`

Text.defaultProps = {
  variant: 'default',
  color: 'default',
  allCaps: false,
  fontWeight: '400',
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'title', 'subtitle', 'body']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']),
  fontWeight: PropTypes.oneOf(['400', '700']),
}

export default Text
