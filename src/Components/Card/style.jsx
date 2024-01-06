import styled from "styled-components";


export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  `;

  export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 320px;
    box-shadow: 4px 2px 6px #000;
    border-radius: 10px;
    background-color: rgba(169,169,169, 0.4);
    
  
    p {
      margin: 5px 0 0 5px;
      width: 100%;
      justify-content: flex-start;
    }
  
    img {
      width: 100px;
    }
  
    h1 {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: end;
      padding: 10px;
      font-size: 16px;
      font-family: 'Bungee Spice', sans-serif;
      font-weight: 900;
      color: #000;
      
    }
  
    .GIF_pokemon {
      width: 50px;
    }
  `;

