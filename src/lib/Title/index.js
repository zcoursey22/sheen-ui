import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Title = ({ children, color, allCaps, fontWeight }) => (
  <ThemeProvider theme={theme}>
    <Styled color={color} fontWeight={fontWeight}>
      {allCaps ? children.toUpperCase() : children}
    </Styled>
  </ThemeProvider>
)

const Styled = styled.span`
  color: ${props =>
    props.color === 'default'
      ? props.theme.black
      : props.theme[props.color].main};
  font-weight: ${props => props.fontWeight};
  font-size: 3em;
`

Title.defaultProps = {
  color: 'default',
  allCaps: false,
  fontWeight: '700',
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  fontWeight: PropTypes.oneOf(['400', '700']),
}

export default Title
