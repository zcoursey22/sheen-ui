import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Paragraph = ({ children, color, allCaps, fontWeight, align, indent }) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled
        color={color}
        fontWeight={fontWeight}
        align={align}
        indent={indent}
      >
        {allCaps ? children.toUpperCase() : children}
      </Styled>
    </ThemeProvider>
  )
}

const Styled = styled.p`
  color: ${props =>
    props.color === 'default'
      ? props.theme.black
      : props.theme[props.color].main};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.align};
  text-indent: ${props => (props.indent ? '3em' : '0')};
`

Paragraph.defaultProps = {
  color: 'default',
  allCaps: false,
  fontWeight: '400',
  align: 'left',
  indent: false,
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  fontWeight: PropTypes.oneOf(['400', '700']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  indent: PropTypes.bool,
}

export default Paragraph
