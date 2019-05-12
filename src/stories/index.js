import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

import { Button, Platform, Text, Title, Subtitle } from '../lib'

const styles = {
  padding: '0.5rem',
}
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)
addDecorator(withKnobs)

storiesOf('Containers', module).add('Platform', () => (
  <Platform>
    <Title fontWeight='400'>This is a Platform</Title>
    <Subtitle color='secondary' allCaps align='left'>
      Check it out
    </Subtitle>
    <Button fullWidth onClick={action('clicked')}>
      Click Me
    </Button>
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
      fullWidth={boolean('Full Width', false)}
    >
      {text('Label', 'Click Me')}
    </Button>
  ),
  {
    notes: 'A standard button',
  }
)

storiesOf('Typograghy', module)
  .add('Text', () => (
    <Text
      color={radios('Color', ['default', 'primary', 'secondary'], 'default')}
      allCaps={boolean('All Caps', false)}
      fontWeight={radios('Font Weight', ['400', '700'], '400')}
      align={radios(
        'Text Align',
        ['left', 'center', 'right', 'justify'],
        'left'
      )}
    >
      Here's some text
    </Text>
  ))
  .add('Title', () => (
    <Title
      color={radios('Color', ['default', 'primary', 'secondary'], 'default')}
      allCaps={boolean('All Caps', false)}
      fontWeight={radios('Font Weight', ['400', '700'], '700')}
      align={radios(
        'Text Align',
        ['left', 'center', 'right', 'justify'],
        'center'
      )}
    >
      Some Title
    </Title>
  ))
  .add('Subtitle', () => (
    <Subtitle
      color={radios('Color', ['default', 'primary', 'secondary'], 'default')}
      allCaps={boolean('All Caps', false)}
      fontWeight={radios('Font Weight', ['400', '700'], '700')}
      align={radios(
        'Text Align',
        ['left', 'center', 'right', 'justify'],
        'center'
      )}
    >
      Some Subtitle
    </Subtitle>
  ))
