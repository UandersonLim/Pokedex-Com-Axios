import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Bungee Spice', sans-serif;
        text-transform: uppercase;
    }


.dark {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background-color: #1C1C1C;
  }

  .light {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background-color: #F0F8FF;
  }

    
`