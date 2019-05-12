import '../index.css'

const teal = '#2bb4a2'
const peach = '#f78e7b'
const white = '#fff'
const black = '#222'

export default {
  black,
  white,
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
    main: 'var(--red)',
    text: 'var(--red)',
    field: 'var(--error-bg)',
  },
  boxShadow: {
    0: 'none',
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
}
