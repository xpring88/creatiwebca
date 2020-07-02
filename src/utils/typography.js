import Typography from "typography";
//import theme from "typography-theme-lawton";
//const typography = new Typography(theme);
/**
 * We can even override any of the theme's styles
 */

/*theme.overrideThemeStyles = () => ({
    a: {
      color: "black",
      textDecoration: "none",
      borderBottom: "2px solid gold"
    },
  
    "a:hover": {
      color: "black",
      textDecoration: "none",
      borderBottom: "2px solid gold"
    }
  });*/
  
  // const typography = new Typography({
  //   baseFontSize: "18px",
  //   baseLineHeight: 1.45,
  //   headerFontFamily: ["MuseoModerno", "sans-serif"],
  //   bodyFontFamily: ["Roboto", "sans-serif"]
  // });


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Roboto", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;



