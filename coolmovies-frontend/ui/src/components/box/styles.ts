import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import Bg from '../../images/creepy-cinema.jpg';

export const BoxContainer = styled(Container)`
  background-image: linear-gradient(
    0deg,
    rgba(0,22,36,0.8883928571428571) 1%,
    rgba(78,78,130,0.1825105042016807) 34%,
    rgba(245,255,0,0.12088585434173671) 100%),
    url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  ${Container};
  padding: 0;
`;

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