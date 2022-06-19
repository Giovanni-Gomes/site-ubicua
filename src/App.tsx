import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AppProvider from "./components/hooks/provider";

export function App() {


  return (
    <>
      <BrowserRouter>

        <AppProvider>
          <Routes />
        </AppProvider>


        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}
