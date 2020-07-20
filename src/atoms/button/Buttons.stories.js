import React from 'react'
import Button from '../../../components/atoms/Button'

export default { title: 'Buttons/Links', component: Button }

export const primaryButton = () => {
  const handleClick = () => console.log('clicked')
  return (
    <Button
      loading={false}
      disabled={false}
      onClick={handleClick}
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
      disabled={false}
      variant={'ghost'}
      onClick={handleClick}
    >
      Click Me
    </Button>
  )
}
