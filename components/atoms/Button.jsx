import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Loading from './Loading'

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 180px;
  transition: border 0.3s ease-in-out, background-color .1s ease-in-out;
  letter-spacing: 0.5px;
  font-size: 16px;
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: white;
  -webkit-font-smoothing: antialiased;
  background-color: ${props => (props.disabled ? 'lightgrey' : '#FF93C9')};
  border: 0px solid #9fdaec;
  border-radius: 8px;
  outline: none;
  ${props => props.styledComp && props.styledComp};
  :focus {
    border: 3px solid #9fdaec;
  }
  :active {
    background-color: #f376b3;
  }
  :hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`

const Button = ({
  className,
  styledComp,
  onClick,
  loading,
  children,
  disabled,
  variant,
  ...otherProps
}) => {
  return (
    <StyledButton
      className={className}
      onClick={() => onClick()}
      disabled={disabled}
      variant={variant}
      styledComp={styledComp}
      {...otherProps}
    >
      {!loading && children}
      {loading && <Loading />}
    </StyledButton>
  )
}
Button.propTypes = {
  className: PropTypes.string,
  styledComp: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  loading: false
}

export default Button
