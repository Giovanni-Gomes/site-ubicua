import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AppProvider from "./components/hooks/provider";


import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { queryClient } from "./services/queryClient";


export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <AppProvider>

            <Routes />

          </AppProvider>


          <GlobalStyles />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
