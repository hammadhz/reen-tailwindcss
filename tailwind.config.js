module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    center: true,
    colors: {
      primary: "#f5f7fa",
      secondary: "#e6e9ed",
      tertiary: "#506a85",
      quartary: "#ffffff",
      quinary: "#a3b1bf",
      senary: "#00bc9c",
      septenary: "#00a085",
      octal: "#73879c",
      nonary: "#f2f5f7",
      decenary: "#e6e9ed",
      undenary: "#2f4052",
      twelfth: "#4e5c6c",
      thirteen: "#283645",
      fouthn: "#707e8c",
      fifthn: "#3c5065",
      sixteen: "#000000",
      seventh: "#e6e6e6"
      
    },
    container: {
      center:true,
      padding: {
        md: "2rem",
        lg: "2rem",
        xl: "4rem", //8rem before
        xxl: "6rem",
        default: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
    fontFamily: {
      'sans': ['Source Sans Pro, sans-serif'],
      'Lato': ["Lato, sans-serif"]
    },
    backgroundImage:{
       'banner': "url('/src/img/banner.png')"
       
    },
    extend: {},
  },
  plugins: [],
};
