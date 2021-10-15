import styled, { createGlobalStyle, css } from 'styled-components';

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;800;900&family=Rubik:wght@800&display=swap');
`;

const BebasFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`;

const GlobalStyles = createGlobalStyle`
  ${RobotoFont}
  ${BebasFont}
  
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
  padding: 0 16px;
  width: 100%;

  @media (min-width: 475px){
    padding: 0 20px;
  }

  @media (min-width: 992px) {
    padding: 0 24px;
  }
`;
