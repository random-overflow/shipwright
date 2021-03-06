module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
      'bg-01-light',
      'bg-02-light',
      'text-01-light',
      'text-02-light',
      'bg-01-dark',
      'bg-02-dark',
      'text-01-dark',
      'text-02-dark',
      'bg-accent-01-inactive',
      'bg-accent-01-active',
      'bg-accent-01-hover',
      'bg-accent-01-selected',
      'bg-accent-02-inactive',
      'bg-accent-02-active',
      'bg-accent-02-hover',
      'bg-accent-02-selected',
      'text-accent-01-inactive',
      'text-accent-01-active',
      'text-accent-01-hover',
      'text-accent-01-selected',
      'text-accent-02-inactive',
      'text-accent-02-active',
      'text-accent-02-hover',
      'text-accent-02-selected',
      'high-contrast-light',
      'high-contrast-dark',
      'text-secondary',
      'text-danger',
      'text-success',
      'text-warning',
      'border-secondary',
      'border-danger',
      'border-success',
      'border-warning',
      'info',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#F8FAFB',
        '01-light': '#FFFFFF',
        '02-light': '#F9F9F9',
        '01-dark': '#111b22',
        '02-dark': '#383e42',
        'high-contrast': '#364A59',
        'medium-contrast': '#566976',
        'low-contrast': '#ACBAC3',
        'secondary': '#ffed4a',
        'danger': '#f8e0e0',
        'success': '#dff0d8',
        'warning': '#fcf8e3',
        'info': '#b8d0ec',
        'accent-01': {
          inactive: '#6DCDD8',
          active: '#31AAB7',
          hover: '#129AA6',
          tertiary: '#ecf5f6',
          selected: '#21717A'
        },
        'accent-02': {
          inactive: '#3393D8',
          active: '#31AAB7',
          hover: '#0069B4',
          selected: '#005A9B'
        },
      }),
      colors: {
        'accent-01': {
          inactive: '#6DCDD8',
          active: '#31AAB7',
          hover: '#129AA6',
          selected: '#21717A'
        },
        'accent-02': {
          inactive: '#3393D8',
          active: '#31AAB7',
          hover: '#0069B4',
          selected: '#005A9B'
        },
        'danger': '#dc3545',
        'success': '#28a745',
        'warning': '#ffc107',
        'info': '#0066dd',
        '01-light': '#FFFFFF',
        '02-light': '#F9F9F9',
        '01-dark': '#111b22',
        '02-dark': '#383e42',
        'high-contrast-light': '#324552',
        'high-contrast-dark': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Work Sans'],
        'display': ['Work Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
