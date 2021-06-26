module.exports = {
  purge: ['_site/**/*.html', './_site/**/*.liquid', './_site/**/*.md' ],
  darkMode: false,
  theme: {
    borderRadius: {
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'xl': '24px',
    },
    extend: {
      colors: {},
      fontFamily: {
        'sans': ['PT Sans', 'ui-sans-serif', 'system-ui', '-apple-system'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
