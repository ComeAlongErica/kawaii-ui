import React from 'react'
import Button from '../../../components/atoms/Button'

export default { title: 'Buttons & Links/Buttons', component: Button }

export const primaryButton = () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      loading={false}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}

export const primaryDisabled = () => {
  const handleClick = () => console.log('clicked')
  const isDisabled = true
  return (
    <Button
      loading={false}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Click Me
    </Button>
  )
}

export const ghostButton = () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      loading={false}
      variant={'ghost'}
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
      loading={false}
      variant={'ghost'}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Click Me
    </Button>
  )
}