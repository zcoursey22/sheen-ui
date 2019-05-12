import { configure, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'

function loadStories() {
  require('../src/stories')
}

addParameters({
  options: {
    theme: create({
      base: 'light',
      colorPrimary: '#f78e7b',
      colorSecondary: '#2bb4a2',
      appContentBg: '#f5f5f5',
      fontBase: '"Noto Sans", sans-serif',
      fontCode: 'monospace',
      textColor: '#222',
      brandTitle: 'Sheen UI',
      brandUrl: 'https://github.com/zcoursey22/sheen-ui',
    }),
  },
})

configure(loadStories, module)
