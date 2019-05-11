import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme.js'

const Button = ({ children, onClick, variant, rounded, disabled }) => {
  const variants = {
    default: DefaultButton,
    ghost: GhostButton,
    text: TextButton,
  }
  const StyledButton = variants[variant]
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        data-testid='button'
        onClick={onClick}
        rounded={rounded}
        disabled={disabled}
      >
        {children.toUpperCase()}
      </StyledButton>
    </ThemeProvider>
  )
}

const DefaultButton = styled.button`
  background: ${props =>
    props.disabled ? 'var(--grey)' : props.theme.primary};
  color: ${props => (props.disabled ? 'var(--medium-grey)' : 'var(--white)')};
  border: 0.1rem solid transparent;
  border-radius: ${props => (props.rounded ? '10rem' : '0.3rem')};
  padding: 0.5rem 2rem;
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : 'default')};
  box-shadow: var(--box-shadow);
  transition: 0.15s;
  user-select: none;
`

const GhostButton = styled(DefaultButton)`
  color: ${props =>
    props.disabled ? 'var(--medium-grey)' : props.theme.primary};
  border: 0.1rem solid;
  border-color: ${props =>
    props.disabled ? 'var(--medium-grey)' : props.theme.primary};
  background: none;
  box-shadow: none;
`

const TextButton = styled(DefaultButton)`
  color: ${props =>
    props.disabled ? 'var(--medium-grey)' : props.theme.primary};
  background: none;
  box-shadow: none;
`

Button.defaultProps = {
  children: '',
  variant: 'default',
  disabled: false,
  rounded: false,
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'ghost', 'text']),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
}

export default Button
