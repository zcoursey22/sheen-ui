import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ children, onClick }) => (
  <ButtonStyled onClick={onClick} data-testid='button'>
    {children}
  </ButtonStyled>
)

const ButtonStyled = styled.button`
  border: none;
  border-radius: 4px;
`

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
