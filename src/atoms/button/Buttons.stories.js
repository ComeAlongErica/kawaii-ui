import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../../../components/atoms/Button'

export default { title: 'Button' }

export const withText = () => {
  const buttonClick = () => console.log('clicked')
  return (
    <Button
      styledComp={text('styledComp', 'width: 100%; height: 50px;')}
      onClick={action('button-click')}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'Primary')}
    >
      {text('children', 'Click Me!')}
    </Button>
  )
}