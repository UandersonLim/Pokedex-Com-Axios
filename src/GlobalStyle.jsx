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
    background-image: url('Assets/escuro-pokemon.jpeg');
    background-size: cover;
    background-position: 0;
  }

  .light {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background-image: url('Assets/claro-pokemons.png');
    background-size: cover;
    background-position: 0;
  }

  @media(max-width: 1200px){
    .light {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background-image: url('Assets/claro-responsivo.png');
    background-size: contain;
  }
  }

  @media(max-width: 780px){
    .light {
    background-image: url('Assets/responsivo-claro.png');
  }
  }
  @media(max-width: 780px){
    .dark {
    background-image: url('Assets/responsive-escuro.png');
  }
  }

    
`