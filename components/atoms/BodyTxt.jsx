import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Body = styled.p`

`
const BodyTxt = props => {
  const { children } = props
  return (
    <Body>
      {children}
    </Body>
  )
}
BodyTxt.propTypes = {
}

BodyTxt.defaultProps = {
}
export default BodyTxt
