import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'
import { darken, desaturate, opacify } from 'polished'

const Button = ({
  children,
  onClick,
  variant,
  rounded,
  disabled,
  color,
  size,
  hiddenColor,
  allCaps,
  fontWeight,
  fullWidth,
  elevation,
}) => {
  const variants = {
    default: Default,
    ghost: Ghost,
    text: Text,
  }
  const Styled = variants[variant]
  const ref = useRef(null)
  return (
    <ThemeProvider theme={theme}>
      <Styled
        ref={ref}
        data-testid='button'
        onClick={() => {
          onClick()
          ref.current.blur()
        }}
        rounded={rounded}
        disabled={disabled}
        color={color}
        size={size}
        hiddenColor={hiddenColor}
        fontWeight={fontWeight}
        fullWidth={fullWidth}
        elevation={elevation}
      >
        {allCaps ? children.toUpperCase() : children}
      </Styled>
    </ThemeProvider>
  )
}

const getPadding = size => {
  switch (size) {
    case 'small':
      return '0.2rem 0.75rem'
    case 'large':
      return '0.8rem 3.5rem'
    default:
      return '0.5rem 2rem'
  }
}

const Default = styled.button`
  background: ${props =>
    props.disabled ? props.theme.disabled.main : props.theme[props.color].main};
  color: ${props =>
    props.disabled ? props.theme.disabled.text : props.theme[props.color].text};
  border: 0.1rem solid transparent;
  border-radius: ${props => (props.rounded ? '10rem' : '0.3rem')};
  padding: ${props => getPadding(props.size)};
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  box-shadow: ${props =>
    props.disabled ? 'none' : props.theme.boxShadow[props.elevation]};
  transition: 0.15s;
  user-select: none;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  &:hover {
    background: ${props =>
      darken(0.05, desaturate(0.1, props.theme[props.color].main))};
  }
  &:focus:not(:active) {
    transition: 0.05s;
    box-shadow: ${props =>
      `0 0 0 0.2rem ${opacify(-0.5, props.theme[props.color].main)}`};
  }
`

const Ghost = styled(Default)`
  color: ${props =>
    props.disabled
      ? props.theme.disabled.text
      : props.hiddenColor
      ? props.theme.black
      : props.theme[props.color].main};
  border: 0.1rem solid;
  border-color: ${props =>
    props.disabled
      ? props.theme.disabled.text
      : props.hiddenColor
      ? props.theme.black
      : props.theme[props.color].main};
  background: none;
  box-shadow: none;
  &:hover {
    color: ${props => props.theme[props.color].main};
    border-color: ${props => props.theme[props.color].main};
    background: ${props => opacify(-0.9, props.theme[props.color].main)};
  }
`

const Text = styled(Default)`
  color: ${props =>
    props.disabled
      ? props.theme.disabled.text
      : props.hiddenColor
      ? props.theme.black
      : props.theme[props.color].main};
  background: none;
  box-shadow: none;
  &:hover {
    color: ${props => props.theme[props.color].main};
    background: ${props => opacify(-0.9, props.theme[props.color].main)};
  }
`

Button.defaultProps = {
  children: '',
  variant: 'default',
  disabled: false,
  rounded: false,
  color: 'primary',
  size: 'medium',
  hiddenColor: false,
  allCaps: true,
  fontWeight: '700',
  fullWidth: false,
  elevation: 1,
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'ghost', 'text']),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  hiddenColor: PropTypes.bool,
  fontWeight: PropTypes.oneOf(['400', '700']),
  fullWidth: PropTypes.bool,
  elevation: PropTypes.number,
}

export default Button
