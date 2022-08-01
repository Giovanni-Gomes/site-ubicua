import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AppProvider from "./components/hooks/provider";

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { queryClient } from "./services/queryClient";

import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { defaultTheme, primaryTheme } from "./styles/themes/light";
import { darkTheme, secondaryTheme } from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./components/Portal/Header";
import useDarkMode from "./components/hooks/useDarkmode";
//defaultTheme e //defaultTheme : darkTheme
//theme={colorMode === 'light' ? primaryTheme : secondaryTheme}
//theme={colorMode === 'light' ? secondaryTheme : primaryTheme}

export function App() {
  const { colorMode, toggleColorMode } = useColorMode(); //toggleColorMode
  const [darkMode, setDarkMode] = useDarkMode();

  const [theme, setTheme] = useState(primaryTheme);
  const toggleTheme = () => {
    console.log("color mode", colorMode);
    //console.log(themetoggleTheme.title);

    setTheme(theme.title === 'light' ? secondaryTheme : primaryTheme);
    //colorMode === 'light' ? primaryTheme : secondaryTheme
    //setDarkMode(darkMode ? secondaryTheme : primaryTheme);

  }
  //const theme = darkMode ? secondaryTheme : primaryTheme;

  //const theme = colorMode === 'light' ? primaryTheme : secondaryTheme;
  //theme={colorMode === 'light' ? defaultTheme : darkTheme}
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <ChakraProvider resetCSS theme={theme}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>

              <AppProvider>
                <>
                  <Header toggleTheme={toggleTheme} />

                  <Routes />
                </>

              </AppProvider>


              <GlobalStyles />
            </BrowserRouter>
            <ReactQueryDevtools />
          </ThemeProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
