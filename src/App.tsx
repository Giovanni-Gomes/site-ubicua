import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AppProvider from "./components/hooks/provider";


import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { queryClient } from "./services/queryClient";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* qualquer coisa voltar para a página Dashboard */}
        <ChakraProvider resetCSS>

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
