import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    snowWhite: "#FFFFFF",
    grayTuna: "#343541",
    grayJumbo: "#85868D",
    grayCharade: "#292A33",
    athensGray: "#F7F7F7",
    bittersweetRed: "#F47073",
    cherryRed: "#EC1115",
    successGreen: "#27AE60",
    inputHover: "#E5E5E5",
    inputActiveBg: "rgba(47, 128, 237, 0.1)",
    btnHover: "#a60c0e",
  },
  fonts: {
    headerFont: "Eczar",
    labelFont: "Roboto Mono",
    defaultFont: "Roboto",
  },
  fontSizes: {
    xs: "0.875rem",
    sm: "1rem",
    md: "1.125rem",
    lg: "2.5rem",
    xl: "5rem",
  },
  fontWeights: {
    sm: 400,
    md: 500,
    lg: 600,
    xl: 700,
  },
  borders: {
    inputActive: "1px solid #2F80ED",
    inputInvalid: "1px solid #EC1115",
    checkbox: "1px solid #85868D",
    checkedSymbol: "solid #FFFFFF",
    btnFocus: "5px solid #f47073",
  },
  shadows: {
    formShadow: "0rem 0.25rem 1.375rem rgba(52, 53, 65, 0.15)",
  },
  radiuses: {
    buttonRadius: "4rem",
    formContRadius: "1.5rem",
    smContRadius: "2rem",
    inputRadius: "0.5rem",
  },
};

const MonteTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MonteTheme;
