import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AppProvider from "./components/hooks/provider";
import useDarkMode from "./components/hooks/useDarkmode";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Portal/Theme";

export function App() {
  const [darkMode] = useDarkMode();

  return (
    <>
      <BrowserRouter>

        {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> */}
        <AppProvider>
          <Routes />
        </AppProvider>


        <GlobalStyles />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </>
  )
}
