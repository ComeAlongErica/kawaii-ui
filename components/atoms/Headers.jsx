import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const sharedStyles = `
line-height: 1;
color: #333;
font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
`

const HeaderOne = styled.h1`
  font-size: 2.75rem;
  ${sharedStyles}
  ${props =>
    props.isPageTitle &&
    `
    position: relative;
    padding-left: 20px;
    font-size: 2.5rem;
    ::after {
      position: absolute;
      content: '';
      height: 100%;
      width: 8px;
      top: 0;
      left: 0;
      background-color: #57b3e4;
    }
`};
`
const HeaderTwo = styled.h2`
  font-size: 2.25rem;
  ${sharedStyles}
`
const HeaderThree = styled.h3`
  font-size: 2.25rem;
  font-weight: 300;
  ${sharedStyles}
`
const HeaderFour = styled.h4`
  font-size: 1.5rem;
  ${sharedStyles}
`
const HeaderFive = styled.h5`
  font-size: 1.25rem;
  font-weight: 500;
  ${sharedStyles}
`
const HeaderSix = styled.h6`
  font-size: 1.125rem;
  ${sharedStyles}
`

const Header = props => {
  const { children, className, element, isPageTitle } = props
  return (
    <>
      {element === 'h1' && isPageTitle && (
        <HeaderOne className={className} isPageTitle={isPageTitle}>
          {children}
        </HeaderOne>
      )}
      {element === 'h1' && !isPageTitle && (
        <HeaderOne className={className} isPageTitle={isPageTitle}>
          {children}
        </HeaderOne>
      )}
      {element === 'h2' && (
        <HeaderTwo className={className}>{children}</HeaderTwo>
      )}
      {element === 'h3' && (
        <HeaderThree className={className}>{children}</HeaderThree>
      )}
      {element === 'h4' && (
        <HeaderFour className={className}>{children}</HeaderFour>
      )}
      {element === 'h5' && (
        <HeaderFive className={className}>{children}</HeaderFive>
      )}
      {element === 'h6' && (
        <HeaderSix className={className}>{children}</HeaderSix>
      )}
    </>
  )
}
Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.string,
  isPageTitle: PropTypes.bool
}

Header.defaultProps = {
  isPageTitle: false
}
export default Header
