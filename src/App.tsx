import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export function App() {


  return (
    <>
      <BrowserRouter>
        <Routes />


        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}
