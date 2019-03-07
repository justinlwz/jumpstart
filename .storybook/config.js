import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withInfo({
  header: false,
  styles: {
    button: {
      topRight: {
        top: 0,
        left: 0,
        right: 'initial',
        borderRadius: '0 0 5px 0',
      },
    }
  },
}))

// Option defaults:
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Jumpstart',
      brandUrl: 'https://justinlwz@github.com/justinlwz/jumpstart',
      brandImage: null,
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
})

configure(loadStories, module)
