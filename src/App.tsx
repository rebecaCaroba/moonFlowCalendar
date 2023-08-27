import { ThemeProvider } from "styled-components"
import { defaultThemes } from "./styles/theme/default"

export function App() {
 return (
  <ThemeProvider theme={defaultThemes}>

  </ThemeProvider>
 )
}

