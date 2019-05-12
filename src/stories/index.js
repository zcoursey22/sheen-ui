import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  radios,
  number,
} from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

import {
  Button,
  Container,
  Platform,
  Spacer,
  Text,
  Title,
  Subtitle,
  Paragraph,
} from '../lib'

const styles = {
  padding: '1.5rem',
}
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)
addDecorator(withKnobs)

storiesOf('Containers', module)
  .add('Container', () => (
    <Container
      minWidth={number('Min Width', 200, {range: true, min: 0, max: 1000, step: 1 })} 
      maxWidth={number('Max Width', 700, {range: true, min: 100, max: 1000, step: 1 })}>
      <Paragraph>
        Lo-fi distillery yr art party asymmetrical plaid Williamsburg pop-up
        Pitchfork viral Tumblr Cosby sweater Bushwick disrupt 8-bit wayfarers
        gastropub vinyl iPhone ennui before they sold out Blue Bottle lomo
        fashion axe pork belly food truck four loko Etsy Vice PBR Banksy roof
        party hella YOLO Portland crucifix sartorial ugh normcore photo booth
        skateboard Odd Future street art.
      </Paragraph>
    </Container>
  ))
  .add('Platform', () => (
    <Platform
      elevation={number('Elevation', 1, {
        range: true,
        min: 0,
        max: 5,
        step: 1,
      })}
    >
      <Paragraph>
        Lorem ipsum dolor amet pour-over snackwave flannel asymmetrical blue
        bottle synth paleo scenester post-ironic selvage. Humblebrag pop-up
        cardigan williamsburg cray food truck la croix cloud bread hammock pok
        pok slow-carb. Beard seitan swag XOXO health goth meh subway tile
        schlitz, blue bottle marfa tbh palo santo fanny pack thundercats.
      </Paragraph>
    </Platform>
  ))
  .add('Spacer', () => (
    <Spacer
      direction={radios('Direction', ['col', 'row'], 'col')}
      space={number('Space', 1, {
        range: true,
        min: 0,
        max: 5,
        step: 0.1,
      })}
    >
      <Button onClick={action('clicked')}>Button 1</Button>
      <Button onClick={action('clicked')}>Button 2</Button>
      <Button onClick={action('clicked')}>Button 3</Button>
    </Spacer>
  ))

storiesOf('Buttons', module).add(
  'Button',
  () => (
    <Button
      onClick={action('clicked')}
      variant={radios('Variant', ['default', 'ghost', 'text'], 'default')}
      disabled={boolean('Disabled', false)}
      rounded={boolean('Rounded', false)}
      hiddenColor={boolean('Hidden Color', false)}
      color={radios('Color', ['primary', 'secondary'], 'primary')}
      size={radios('Size', ['small', 'medium', 'large'], 'medium')}
      fontWeight={radios('Font Weight', ['400', '700'], '700')}
      allCaps={boolean('All Caps', true)}
      fullWidth={boolean('Full Width', false)}
      elevation={number('Elevation', 1, {
        range: true,
        min: 0,
        max: 5,
        step: 1,
      })}
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
