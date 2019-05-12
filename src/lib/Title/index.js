import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Title = ({ children, color, allCaps, fontWeight, align }) => (
  <ThemeProvider theme={theme}>
    <Styled color={color} fontWeight={fontWeight} align={align}>
      {allCaps ? children.toUpperCase() : children}
    </Styled>
  </ThemeProvider>
)

const Styled = styled.h1`
  color: ${props =>
    props.color === 'default'
      ? props.theme.black
      : props.theme[props.color].main};
  font-weight: ${props => props.fontWeight};
  font-size: 3.5em;
  display: block;
  text-align: ${props => props.align};
`

Title.defaultProps = {
  color: 'default',
  allCaps: false,
  fontWeight: '700',
  align: 'center',
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  fontWeight: PropTypes.oneOf(['400', '700']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
}

export default Title
