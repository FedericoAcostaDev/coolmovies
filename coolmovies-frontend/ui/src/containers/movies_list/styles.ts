import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
  display: flex;
  padding: 24px;
  gap: 20px;
  overflow: auto;
  width: 100%;

  @media (min-width: 475px){
    width: ${({ width }) => width ? width : '100%'};
  }
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;