import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import AppProvider from './components/hooks/provider'

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/theme/dark'
import { lightTheme } from './styles/theme/light'
import { useState } from 'react'
import useDarkMode from './components/hooks/useDarkmode'
import Toggle from './components/Shared/Toggle'
import PortalStyles from './styles/PortalStyles'

export function App() {
  // const [theme, setTheme] = useState(lightTheme)
  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  // }
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppProvider>
              <Routes />
            </AppProvider>

            {/* <GlobalStyles /> */}
            <PortalStyles />
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
