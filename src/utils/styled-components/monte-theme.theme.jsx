import { ThemeProvider } from "styled-components";
import media from "./media";

const MonteTheme = ({ children }) => (
  <ThemeProvider
    theme={{
      snowWhite: "#FFFFFF",
      grayTuna: "#343541",
      grayJumbo: "#85868D",
      bittersweetRed: "#F47073",
      cherryRed: "#EC1115",
      headerFont: "Eczar",
      labelFont: "Roboto Mono",
      defaultFont: "Roboto",
      ...media,
    }}
  >
    {children}
  </ThemeProvider>
);

export default MonteTheme;
