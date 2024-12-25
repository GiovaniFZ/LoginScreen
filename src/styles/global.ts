import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    -webkit-font-smoothing: antialised;
}
body, input, textarea, button {
    color: ${props => props.theme["red-300"]};
    font: 400 1rem Poppins, sans-serif;
}
`