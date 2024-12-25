import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
