import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 100%;

  @media (min-width: 475px){
    padding: 20px;
  }

  @media (min-width: 992px) {
    padding: 24px;
  }
`;
