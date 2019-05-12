import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

import { Button } from '../lib'

const styles = {
  padding: '0.5rem',
}
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)
addDecorator(withKnobs)

storiesOf('Buttons|Button', module)
  .add(
    'default',
    () => (
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        rounded={boolean('Rounded', false)}
        color={radios('Color', ['primary', 'secondary'], 'primary')}
        size={radios('Size', ['small', 'medium', 'large'], 'medium')}
      >
        {text('Label', 'Click Me')}
      </Button>
    ),
    {
      notes: 'A standard button',
    }
  )
  .add(
    'ghost',
    () => (
      <Button
        variant='ghost'
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        rounded={boolean('Rounded', false)}
        color={radios('Color', ['primary', 'secondary'], 'primary')}
        size={radios('Size', ['small', 'medium', 'large'], 'medium')}
      >
        {text('Label', 'Click Me')}
      </Button>
    ),
    {
      notes: 'A standard button',
    }
  )
  .add(
    'text',
    () => (
      <Button
        variant='text'
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        rounded={boolean('Rounded', false)}
        color={radios('Color', ['primary', 'secondary'], 'primary')}
        size={radios('Size', ['small', 'medium', 'large'], 'medium')}
      >
        {text('Label', 'Click Me')}
      </Button>
    ),
    {
      notes: 'A standard button',
    }
  )
