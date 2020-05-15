import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
${props => props.styledComp && props.styledComp}
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
      loading={loading}
      disabled={disabled}
      variant={variant}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}
Button.propTypes = {
  className: PropTypes.string,
  styledComp: PropTypes.string,
  onClick: PropTypes.func.required,
  loading: PropTypes.bool,
  children: PropTypes.node.required,
  disabled: PropTypes.bool,
  variant: PropTypes.string
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  loading: false
}

export default Button
