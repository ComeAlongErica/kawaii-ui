import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const bouncing = keyframes`{
  0 {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
`

const Dot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 3px;
  border-radius: 15px;
  background-color: ${props => props.ghost ? '#FF93C9' : 'white'};
  margin-top: 5px;
  &&.dot1 {
    animation: ${bouncing} 0.6s 0.1s linear infinite;
  }
  &&.dot2 {
    animation: ${bouncing} 0.6s 0.2s linear infinite;
  }
  &&.dot3 {
    animation: ${bouncing} 0.6s 0.3s linear infinite;
  }
`
const Loading = props => {
  return (
    <>
      <Dot className='dot1' ghost={props.ghost}></Dot>
      <Dot className='dot2' ghost={props.ghost}></Dot>
      <Dot className='dot3' ghost={props.ghost}></Dot>
    </>
  )
}
Loading.propTypes = {
  ghost: PropTypes.bool,
}

Loading.defaultProps = {
  ghost: false
}
export default Loading
