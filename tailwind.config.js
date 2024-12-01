/** @type {import('tailwindcss').Config} */


// bgp: '#A1959F',


export default {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    letterSpacing: {
      widest: '0.5em', // Customize the spacing as needed
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {

      fontFamily: {
        primary: ['Inter', 'sans-serif'], // Set Poppins as the default sans-serif font
        secondry: ['Michroma', 'sans-serif']
      },
      colors: {
        // bgp: {
        //   DEFAULT: 'rgb(76,75,101)',
        // },
        // bgpl: 'rgb(224,220,224)',
        bgpl: 'rgb(224,220,224)',
        bgp: 'rgb(140,120,145)',
        // bgp: '#9E7BB5',
        // bgp: '#A1959F',

        // bgp:'rgb(202, 193, 214)',
        bgfn:'rgb(202,193,214)',
        bgcu:'rgb(171,112,185)',
        b1: '#000200',
        b2:{
          DEFAULT: '#c7c2d8'
        },
        // t1:{
        //   DEFAULT: '#4B6551'
        // },
        t1: '#F1F1F1',
        t2:{
          DEFAULT: '#52525B'
        },
        bg1: 'rgb(236,236,234)',
        bg2: '#212721',
        f1: '#212721',
      }
    },
  },
  plugins: [],
}

