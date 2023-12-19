import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks";
import generateColors from "./colors";

      /*Author freecodecamp*/
/* A few media query to set some font sizes at different screen sizes.
 * This helps automate a bit of responsiveness.
 * The trick is to use the rem unit for size values, margin and padding.
 * Because rem is relative to the document font size
 * when we scale up or down the font size on the document
 * it will affect all properties using rem units for the values.
*/

/* I am using the em unit for breakpoints
 * The calculation is the following
 * screen size divided by browser base font size
 * As an example: a breakpoint at 980px
 * 980px / 16px = 61.25em
*/

const StyledGlobalStyle = createGlobalStyle`
/* Base reset */
* {
    margin: 0;
    padding: 0;
  }
/* box-sizing and font sizing */
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
    box-sizing: border-box;
  
    /* Set font size for easy rem calculations
     * default document font size = 16px, 1rem = 16px, 100% = 16px
     * (100% / 16px) * 10 = 62.5%, 1rem = 10px, 62.5% = 10px
    */
    font-size: 62.5%;
    scroll-behavior: smooth;
    color:${({colors}) => colors && colors.primary};
  }
  /* Base styles */

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem; /* 18px */
  font-weight: 400;
  line-height: 1.4;
}


h1,
h2 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  text-align: center;
  color:${({colors}) => colors && colors.primary};
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 4.2rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color:${({colors}) => colors && colors.primary};
}

img {
  display: block;
  width: 100%;
}
`

const GlobalStyled = () => {
  const {theme} = useTheme();
  const colors = generateColors(theme);
  //console.taale(colors);
  return <StyledGlobalStyle colors={colors}/>
}
export default GlobalStyled;