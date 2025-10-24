import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;

}

body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000b9;
}
`

export default GlobalStyle