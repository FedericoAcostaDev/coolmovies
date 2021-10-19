import styled, { css } from 'styled-components';
import { Container } from '../../GlobalStyles';
import Bg from '../../images/creepy-cinema.jpg';

export const BoxContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BoxContainer = styled(Container)<{ background?: string, withoutBackground: boolean, gradient?: string }>`
  background-image: ${({ gradient }) => gradient ? gradient : 'linear-gradient(0deg, rgba(2,0,36,0.6615021008403361) 0%, rgba(2,2,20,0.5172443977591037) 100%, rgba(0,212,255,0.22452731092436973) 100%)'},
    url(${({ background }) => background ? background : Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin-top: -70px;

  ${({ withoutBackground }) => withoutBackground && css`background: transparent`};
`;