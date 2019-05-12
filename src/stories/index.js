import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

import { Button, Platform, Text, Title, Subtitle, Paragraph } from '../lib'

const styles = {
  padding: '1.5rem',
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
    <Paragraph>
      Lorem ipsum dolor amet pour-over snackwave flannel asymmetrical blue
      bottle synth paleo scenester post-ironic selvage. Humblebrag pop-up
      cardigan williamsburg cray food truck la croix cloud bread hammock pok pok
      slow-carb. Beard seitan swag XOXO health goth meh subway tile schlitz,
      blue bottle marfa tbh palo santo fanny pack thundercats.
    </Paragraph>
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
  .add('Paragraph', () => (
    <Paragraph
      color={radios('Color', ['default', 'primary', 'secondary'], 'default')}
      allCaps={boolean('All Caps', false)}
      fontWeight={radios('Font Weight', ['400', '700'], '400')}
      align={radios(
        'Text Align',
        ['left', 'center', 'right', 'justify'],
        'left'
      )}
      indent={boolean('Text Indent', false)}
    >
      Lorem ipsum dolor amet enamel pin ugh edison bulb jean shorts schlitz art
      party pop-up food truck synth fanny pack cold-pressed pabst. Pug selvage
      echo park man braid, activated charcoal keffiyeh kitsch waistcoat tote bag
      hashtag snackwave forage schlitz. Selfies raw denim bespoke, iceland
      humblebrag keffiyeh tattooed tousled unicorn pinterest truffaut lyft la
      croix edison bulb drinking vinegar. Hexagon ugh tofu neutra cray polaroid
      selvage swag occupy photo booth unicorn waistcoat cliche. Actually echo
      park waistcoat, fanny pack offal pabst snackwave tumeric mumblecore YOLO
      direct trade scenester four loko venmo pork belly.
    </Paragraph>
  ))
