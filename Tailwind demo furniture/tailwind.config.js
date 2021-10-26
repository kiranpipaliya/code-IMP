const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontSize: {
        'base': 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
        '6xl': 'calc(30px + (64 - 30) * ((100vw - 320px) / (1920 - 320)))',
        '4xl': 'calc(23px + (36 - 23) * ((100vw - 320px) / (1920 - 320)))',
        '2xl': 'calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)))',
      },
      spacing: {
        '1.2em': '1.2em',
      },
      strokeWidth: {
        '3': '3',
        '4': '4',
      },

      height: {
        'small-screen': '70vh',
      },
      width: {
        "54%": '54%',
        '60%': '60%',
        '70%': '70%',
        '65%': '65%',
        '75%': '75%',
        '80%': '80%',
        '85%': '90%',

        "75": "19rem",
      },
      padding: {
        '20': 'calc(0px + (80 - 0) * ((100vw - 320px) / (1920 - 320)))',

      },
      margin: {
        '24': 'calc(32px + (96 - 32) * ((100vw - 320px) / (1920 - 320)))'
      },
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        'Playfair': ['Playfair Display', 'serif'],
      },

      backgroundImage: theme => ({
        'hero-pattern': "url('/img/home-bg.png')",
        'footer-texture': "url('/img/footer-bg.png')",
        'bg-50': 'linear-gradient(to right, #E5E5E5 50%, transparent 50%)',
        'bg-100': 'linear-gradient(to right, #E5E5E5 100%, transparent 0%)',
      }),
      lineHeight: {
        '86': 'calc(50px + (86 - 50) * ((100vw - 320px) / (1920 - 320)))',

      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        blue: {
          '700': ['#B18C67']
        },
        // Configure your color palette here  
        primary: '#B18C67',
        secondary: '#E1DCD6',
        tertiary: '#ECC5AC',
        title: '#2B2B29',
        box: '#F4F3F1',
        body: '#E5E5E5',
        content: '#6A6A6A',
        border: '#CCCCCC',
        rating: '#f7c100',
        border2: "rgba(244, 243, 241, 0.23)",
        input: 'rgba(204, 204, 204, 0.23)',
      },
      maxWidth: {
        '1400': '1400px',


      },
      boxShadow: {
        normal: '0px 0px 4px rgba(0, 0, 0, 0.1)',
      },


    },

  },
  variants: {
    extend: {
      scale: ['responsive'],
      ring: ['active'],
      backgroundImage: ['active'],
      backgroundColor: ["active"],
      textColor: ['active'],
      fontSize: ['hover', 'active'],
      display: ['hover', 'focus', 'group-hover'],
      width: ["before", "after"],
      inset: ["before", "after"],
      top: ["before", "after"],
      bottom: ["before", "after"],
      left: ["before", "after"],
      right: ["before", "after"],
      after: ['responsive'],
      before: ['responsive'],
      visibility: ['group-hover', 'hover', 'focus', 'responsive'],
      padding: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
      scale: ['responsive'],
      ring: ['active', 'focus'],
      ringColor: ['active', 'focus'],
      backgroundImage: ['active'],
      backgroundColor: ["active"],
      textColor: ['active'],
      fontSize: ['hover', 'active'],
      display: ['hover', 'focus', 'group-hover'],


      visibility: ['group-hover', 'hover', 'focus', 'responsive'],
      stroke: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],

      textTransform: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
      padding: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
      textColor: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
      children: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      fill: ['checked', 'children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],


    },
  },
  corePlugins: {
    // ...
    backgroundImage: true,
    // container: false

  },
  plugins: [
    require('tailwindcss-children'),
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".border-content": {
          content: "''",
          height: '6px',
          position: 'absolute',
          width: '100%',

          zIndex: '-1',
          backgroundColor: '#E1DCD6',
        },
        ".list": {
          content: "\e067",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),

    require('tailwindcss-children'),

    // function ({ addComponents }) {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       marginLeft: 'auto',
    //       marginRight: 'auto',
    //       paddingLeft: '8px',
    //       paddingRight: '8px',
    //       '@screen sm': {
    //         maxWidth: '640px',
    //       },
    //       '@screen md': {
    //         maxWidth: '768px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '1280px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1200px',
    //       },
    //     }
    //   })
    // }


  ],
  // plugins: [function ({ addUtilities }) {
  //   const extendUnderline = {
  //     '.underline': {
  //       'textDecoration': 'underline',
  //       'text-decoration-color': '#CCCCCC',
  //       'text-decoration-thickness': '6px',
  //     },
  //   }

  //   addUtilities(extendUnderline)


  // }],
}
