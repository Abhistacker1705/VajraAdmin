import {createTheme, experimental_extendTheme} from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 480,
      laptop: 790,
      desktop: 970,
      xLDesktop: 1200,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1746A2",
    },
    secondary: {
      main: "#FF731D",
    },
    error: {
      main: "#EA232B",
    },
    background: {
      default: "#FAF5EE",
    },
    text: {
      primary: "#212427",
      secondary: "rgba(33, 36, 39, 0.5)",
    },
    border: {
      primary: "rgba(255, 115, 29, 0.5)",
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: "Poppins",
    h1: {
      fontSize: "3.125rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.125rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
  },
  shadows: {
    ...shadows,
    input: "2px 2px 8px -2px rgba(0, 79, 149, 0.1)",
    box: "0px 4px 8px -2px rgba(0, 79, 149, 0.25)",
    nav: "0px 4px 8px -2px rgba(154, 154, 154, 0.25)",
    footer: "0px -4px 8px -2px rgba(154, 154, 154, 0.25)",
    button: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    tableRow: "0px 4px 8px -2px rgba(0, 79, 149, 0.5)",
  },
});

export default theme;
