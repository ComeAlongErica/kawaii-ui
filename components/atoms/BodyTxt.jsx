import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Body = styled.p`
  line-height: 1.6;
  color: ${props => props.warn ? 'red': '#333'};
  font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
  font-size: ${props => props.fontSize};
  font-weight: ${props => (props.isBold ? '600' : '300')};
  ${props => props.isItalic && 'font-style: italic'};
`
const getFontSize = variant => {
  switch (variant) {
    case 'xs':
      return '.7rem'
      break
    case 'sm':
      return '.85rem'
      break
    case 'md':
      return '.9rem'
      break
    case 'lg':
      return '1.1rem'
      break
    case 'xl':
      return '1.2rem'
      break
    default:
      return '1rem'
  }
}
const BodyTxt = props => {
  const { children, className, variants } = props

  const fontSizeOptions = ['xs', 'sm', 'md', 'lg', 'xl']
  const fontSize = getFontSize(
    variants.filter(size => fontSizeOptions.includes(size))[0]
  )

  const styling = {
    isBold: variants.includes('bold'),
    isItalic: variants.includes('italic'),
    warn: variants.includes('warn')
  }
  return (
    <Body className={className} fontSize={fontSize} {...styling}>
      {children}
    </Body>
  )
}
BodyTxt.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variants: PropTypes.array
}

BodyTxt.defaultProps = {
  variants: []
}
export default BodyTxt
