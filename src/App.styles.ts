import styled, { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
    
    background-image: url(${background});
    background-size: cover;
    margin: 0;
    padding: 20px 20px;
    display: flex;
    justify-content: center; 
    height: 100%;
    
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 10px 10px;
  word-wrap: break-word;
  height: 40px;
  width: 80%;

  background: linear-gradient(180deg, #f2edef, #21ae53);
  border: 2px solid #666c59;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :focus {
    outline: none;
  }

  ${({ disabled }) => {
    return !disabled
      ? ":hover {background: linear-gradient(180deg, #f2edef, #0b6864)}"
      : "";
  }}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
