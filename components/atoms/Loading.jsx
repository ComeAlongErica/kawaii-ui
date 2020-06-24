import React from 'react'
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
  background-color: white;
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
const Button = () => {
  return (
    <>
      <Dot className='dot1'></Dot>
      <Dot className='dot2'></Dot>
      <Dot className='dot3'></Dot>
    </>
  )
}

export default Button
