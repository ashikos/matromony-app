/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      flowbite.content(),
  ],

  
  theme: {
    extend:  {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        amatic: ['Amatic SC', 'cursive'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    nextui(),
    flowbite.plugin(),
    ],
}