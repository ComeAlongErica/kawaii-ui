import React from 'react'
import Button from '../../../components/atoms/Button'

export default { title: 'Buttons/Links', component: Button }

export const primaryButton = () => {
  const buttonClick = () => console.log('clicked')
  return (
    <Button
      loading={false}
      disabled={false}
    >
      Click Me
    </Button>
  )
}

export const ghostButton = () => {
  const buttonClick = () => console.log('clicked')
  return (
    <Button
      loading={false}
      disabled={false}
      variant={'ghost'}
    >
      Click Me
    </Button>
  )
}
