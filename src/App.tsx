import { ThemeProvider } from "styled-components"
import { defaultThemes } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from "./context/CyclesContext"

export function App() {
 return (
  <ThemeProvider theme={defaultThemes}>
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
    <GlobalStyle/>
  </ThemeProvider>
 )
}

