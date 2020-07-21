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
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out,
    border 0.2s ease-in-out;
  letter-spacing: 0.5px;
  font-size: 16px;
  font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  border: 0px solid #9fdaec;
  border-radius: 8px;
  ${props => props.styledComp && props.styledComp};
  outline: none;
  :active {
    transform: scale(1.05);
  }
  :hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`
const Primary = styled(StyledButton)`
  background-color: ${props => (props.disabled ? 'lightgrey' : props.variant === 'primary' ? '#FF93C9' : '#57b3e4')};
  color: white;
  :focus {
    background-color: ${props => props.variant === 'primary' ? '#f376b3' : '#2498d6'};
  }
`
const Ghost = styled(StyledButton)`
  background-color: ${props => (props.disabled ? '#f1f1f1' : 'transparent')};
  color: ${props => (props.disabled ? 'darkgrey' : '#FF93C9')};
  border: 1px solid;
  :focus {
    border: 3px solid #ff93c9;
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
  const DisplayComp = props => {
    return variant === 'primary' || variant === 'secondary' ? <Primary {...props} /> : <Ghost {...props} />
  }
  return (
    <DisplayComp
      className={className}
      onClick={() => onClick()}
      disabled={disabled}
      styledComp={styledComp}
      variant={variant}
      {...otherProps}
    >
      {!loading && children}
      {loading && <Loading variant={variant} />}
    </DisplayComp>
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
  loading: false,
  styledComp: 'width: 150px; height: 45px;'
}

export default Button
