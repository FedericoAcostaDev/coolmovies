import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string,
  link?: string,
  color?: string,
  callback?: Function
}

const Button: React.FC<ButtonProps> = ({ text, link, callback, color }) => { 
  return (
    <ButtonContainer>
    </ButtonContainer>
  )
}

export default Button;