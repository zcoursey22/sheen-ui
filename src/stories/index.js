import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

import { Button, Platform, Text } from '../lib'

const styles = {
  padding: '0.5rem',
}
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)
addDecorator(withKnobs)

storiesOf('Containers', module).add('Platform', () => (
  <Platform>
    <Button>Click Me</Button>
  </Platform>
))

storiesOf('Buttons', module).add(
  'Button',
  () => (
    <Button
      onClick={action('clicked')}
      variant={radios('Variant', ['default', 'ghost', 'text'], 'default')}
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

storiesOf('Typograghy', module).add('Text', () => (
  <Text
    color={radios(
      'Color',
      ['default', 'primary', 'secondary', 'error'],
      'default'
    )}
    allCaps={boolean('All Caps', false)}
    fontWeight={radios('Font Weight', ['400', '700'], '400')}
  >
    Here's some text
  </Text>
))
