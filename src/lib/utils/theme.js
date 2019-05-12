import '../index.css'

const teal = '#2bb4a2'
const peach = '#f78e7b'
const white = '#fff'
const black = '#222'

export default {
  black: black,
  primary: {
    main: teal,
    text: white,
  },
  secondary: {
    main: peach,
    text: white,
  },
  disabled: {
    main: 'var(--grey)',
    text: 'var(--medium-grey)',
  },
  warning: {
    main: 'var(--warning-bg)',
    text: 'var(--yellow)',
  },
  error: {
    main: 'var(--error-bg)',
    text: 'var(--red)',
  },
}
