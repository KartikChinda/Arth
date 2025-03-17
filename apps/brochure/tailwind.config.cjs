/** @type {import('tailwindcss').Config} */
const config = require("@repo/config/tailwindConfig"); 

module.exports = {
    ...config,
    theme: {
        extend: {
          colors: {
            navorange: "#eed080",
            elementyellow: "#FAF1DC" 
          }, 
          fontFamily : {
            "hero-heading": ["Bebas Neue"],
            "subtext-heebo": ["Heebo"],
            "subtext-lora": ['Lora'],
            "heading-playfair": ['Playfair Display']
          },
        },
      }, 
    content: ["./app/**/*.tsx", "../../packages/ui/**/*.tsx"], 
}