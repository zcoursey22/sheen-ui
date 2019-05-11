import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import { Button } from '../lib'

const styles = {
  padding: '0.5rem',
}
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('DemoButton')} />
))

storiesOf('Components|Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Click Me</Button>)
  .add('ghost', () => (
    <Button onClick={action('clicked')} variant='ghost'>
      Click Me
    </Button>
  ))
  .add('text', () => (
    <Button onClick={action('clicked')} variant='text'>
      Click Me
    </Button>
  ))
