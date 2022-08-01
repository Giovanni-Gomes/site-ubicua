import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import AppProvider from './components/hooks/provider'

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'

import { ChakraProvider } from '@chakra-ui/react'
import { newTheme } from './components/Portal/Theme'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={newTheme}>
          <BrowserRouter>
            <AppProvider>
              <Routes />
            </AppProvider>

            <GlobalStyles />
          </BrowserRouter>
          <ReactQueryDevtools />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
