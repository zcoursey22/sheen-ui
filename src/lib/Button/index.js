import React from 'react'
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
}) => {
  const variants = {
    default: Default,
    ghost: Ghost,
    text: Text,
  }
  const Styled = variants[variant]
  return (
    <ThemeProvider theme={theme}>
      <Styled
        data-testid='button'
        onClick={onClick}
        rounded={rounded}
        disabled={disabled}
        color={color}
        size={size}
      >
        {children.toUpperCase()}
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
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : 'default')};
  box-shadow: ${props => (props.disabled ? 'none' : 'var(--box-shadow)')};
  transition: 0.15s;
  user-select: none;
  &:hover {
    background: ${props =>
      darken(0.05, desaturate(0.1, props.theme[props.color].main))};
  }
  &:focus {
    transition: 0.05s;
    box-shadow: ${props =>
      `0 0 0 0.2rem ${opacify(-0.5, props.theme[props.color].main)}`};
  }
`

const Ghost = styled(Default)`
  color: ${props =>
    props.disabled ? props.theme.disabled.text : props.theme[props.color].main};
  border: 0.1rem solid;
  border-color: ${props =>
    props.disabled ? props.theme.disabled.text : props.theme[props.color].main};
  background: none;
  box-shadow: none;
  &:hover {
    background: ${props => opacify(-0.9, props.theme[props.color].main)};
  }
`

const Text = styled(Default)`
  color: ${props =>
    props.disabled ? props.theme.disabled.text : props.theme[props.color].main};
  background: none;
  box-shadow: none;
  &:hover {
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
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'ghost', 'text']),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Button
