import React from 'react'
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../../../components/atoms/Button'

export default { title: 'Button' }

export const withText = () => {
  return (
    <Button
      styledComp={text('styledComp', '')}
      onClick={action('button-click')}
      className={text('className', '')}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'Primary')}
    >
      I'm a Button!
    </Button>
  )
}

