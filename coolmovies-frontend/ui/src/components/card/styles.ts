import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import User from '../../images/user.png';

export const CardContainer = styled(Container)`
  background: #FFF;
  height: 100%;
  width: 100%;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  max-width: 360px;
  max-height: 460px;
`;

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CardImage = styled.img.attrs({
  src: User,

})`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  padding: 5px;
  background: linear-gradient(93deg, rgba(166,3,8,0.8883928571428571) 1%, rgba(69,26,214,1) 81%, rgba(130,78,79,1) 100%);
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CardSubtitle = styled.h4`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #616161;
  margin-bottom: 20px;
  line-height: 20px;
`;

export const CardFooter = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;