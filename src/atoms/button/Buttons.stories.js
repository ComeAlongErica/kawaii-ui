import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../../../components/atoms/Button'

export default { title: 'MDX/Button', component: Button }

export const primaryButton = () => {
  const buttonClick = () => console.log('clicked')
  return (
    <Button
      styledComp={text('styledComp', 'width: 150px; height: 45px;')}
      onClick={action('button-click')}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'primary')}
    >
      {text('children', 'Click Me')}
    </Button>
  )
}

export const ghostButton = () => {
  const buttonClick = () => console.log('clicked')
  return (
    <Button
      styledComp={text('styledComp', 'width: 150px; height: 45px;')}
      onClick={action('button-click')}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'ghost')}
    >
      {text('children', 'Click Me')}
    </Button>
  )
}
