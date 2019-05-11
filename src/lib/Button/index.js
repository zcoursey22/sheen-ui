import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ children, onClick, variant }) => {
  const variants = {
    default: DefaultButton,
    ghost: GhostButton,
    text: TextButton,
  }
  const StyledButton = variants[variant]
  return (
    <StyledButton data-testid='button' onClick={onClick}>
      {children.toUpperCase()}
    </StyledButton>
  )
}

const DefaultButton = styled.button`
  border: 0.1rem solid transparent;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--box-shadow);
`

const GhostButton = styled(DefaultButton)`
  border: 0.1rem solid var(--black);
  background: none;
  box-shadow: none;
`

const TextButton = styled(DefaultButton)`
  background: none;
  box-shadow: none;
`

Button.defaultProps = {
  variant: 'default',
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'ghost', 'text']),
}

export default Button
