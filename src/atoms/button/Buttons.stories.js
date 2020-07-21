import React from 'react'
import Button from '../../../components/atoms/Button'

export default { title: 'Buttons & Links/Buttons', component: Button}

export const primary= () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const secondary= () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      variant={'secondary'}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const loading = () => {
  const handleClick = () => console.log('clicked')
  const isLoading = true
  return (
    <Button
      loading={isLoading}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const disabled= () => {
  const handleClick = () => console.log('clicked')
  const isDisabled = true
  return (
    <Button
      onClick={handleClick}
      disabled={isDisabled}
    >
      Click Me
    </Button>
  )
}

export const ghost= () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      variant={'ghost'}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const ghostLoading = () => {
  const handleClick = () => console.log('clicked')
  const isLoading = true
  return (
    <Button
      variant={'ghost'}
      loading={isLoading}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const ghostDisabled = () => {
  const handleClick = () => console.log('clicked')
  const isDisabled = true
  return (
    <Button
      variant={'ghost'}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Click Me
    </Button>
  )
}

export const text = () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      variant={'text'}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const LoadingText = () => {
  const handleClick = () => console.log('clicked')
  const isLoading = true
  return (
    <Button
      loading={isLoading}
      variant={'text'}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}