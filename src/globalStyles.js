import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background-color: #252836;
`;

export default GlobalStyle;
