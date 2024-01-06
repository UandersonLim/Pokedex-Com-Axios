import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    width: 90%;
    padding: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 1rem;
  }
`;

export const Box_Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Box_select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1%;
  left: 3%;
  width: 155px;
  height: 45px;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  background-size: 400%;
  animation: glowing 20s linear infinite;
  border-radius: 10px;
  opacity: 1;

  select {
    font-size: 12px;
    text-align: center;
    font-weight: 900;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .glow-on-hover {
    width: 150px;
    height: 40px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    z-index: 0;
    border-radius: 10px;
    transition: opacity 0.3s ease-in-out;
  }
`;
