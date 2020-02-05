const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    
    extend: {
      colors: {
        'graybox': '#f0f0f0',
        'badgetags': '#ffba00',
      },
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
    inset: {
      '0': 0,
    '1/2': '50%',
    }
    
  },
  variants: {},
  plugins: [],
}
