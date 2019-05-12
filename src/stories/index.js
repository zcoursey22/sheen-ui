import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

import { Button, Platform } from '../lib'

const styles = {
  padding: '0.5rem',
}
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)
addDecorator(withKnobs)

storiesOf('Button', module)
  .add(
    'Default',
    () => (
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        rounded={boolean('Rounded', false)}
        color={radios('Color', ['primary', 'secondary'], 'primary')}
        size={radios('Size', ['small', 'medium', 'large'], 'medium')}
        fontWeight={radios('Font Weight', ['400', '700'], '700')}
        allCaps={boolean('All Caps', true)}
      >
        {text('Label', 'Click Me')}
      </Button>
    ),
    {
      notes: 'A standard button',
    }
  )
  .add(
    'Ghost',
    () => (
      <Button
        variant='ghost'
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        rounded={boolean('Rounded', false)}
        color={radios('Color', ['primary', 'secondary'], 'primary')}
        size={radios('Size', ['small', 'medium', 'large'], 'medium')}
        hiddenColor={boolean('Hidden Color', false)}
        fontWeight={radios('Font Weight', ['400', '700'], '700')}
        allCaps={boolean('All Caps', true)}
      >
        {text('Label', 'Click Me')}
      </Button>
    ),
    {
      notes: 'A ghost button',
    }
  )
  .add(
    'Text',
    () => (
      <Button
        variant='text'
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        rounded={boolean('Rounded', false)}
        color={radios('Color', ['primary', 'secondary'], 'primary')}
        size={radios('Size', ['small', 'medium', 'large'], 'medium')}
        hiddenColor={boolean('Hidden Color', false)}
        fontWeight={radios('Font Weight', ['400', '700'], '700')}
        allCaps={boolean('All Caps', true)}
      >
        {text('Label', 'Click Me')}
      </Button>
    ),
    {
      notes: 'A text-only button',
    }
  )

storiesOf('Platform', module).add('Default', () => (
  <Platform>
    <Button>Click Me</Button>
  </Platform>
))
