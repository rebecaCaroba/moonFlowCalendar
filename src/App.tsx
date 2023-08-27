import { ThemeProvider } from "styled-components"
import { defaultThemes } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'

export function App() {
 return (
  <ThemeProvider theme={defaultThemes}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle/>
  </ThemeProvider>
 )
}

