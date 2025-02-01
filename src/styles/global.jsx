import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
    --cor-de-fundo: #1f242d;
    --segunda-cor-de-fundo: #323946;
    --cor-principal: #800080;
    --cor-rosa: #e41ee4;
    --cor-branca: #fff;
}
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        height: 100vh;
        background-color: var(--cor-de-fundo);
        font-family: Arial, Helvetica, sans-serif;
    }
`

export default GlobalStyle